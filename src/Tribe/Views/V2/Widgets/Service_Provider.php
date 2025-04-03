<?php
/**
 * The main service provider for the version 2 of the Widgets.
 *
 * @since   5.2.1
 *
 * @package Tribe\Events\Views\V2\Widgets
 */

namespace Tribe\Events\Views\V2\Widgets;

use Tribe\Events\Views\V2\Views\Widgets\Widget_List_View;
use TEC\Common\Contracts\Service_Provider as Provider_Contract;


/**
 * Class Service_Provider
 *
 * @since   5.2.1
 *
 * @package Tribe\Events\Views\V2\Widgets
 */
class Service_Provider extends Provider_Contract {


	/**
	 * Binds and sets up implementations.
	 *
	 * @since 5.2.1
	 */
	public function register() {
		// Determine if V2 views are loaded.
		if ( ! tribe_events_views_v2_is_enabled() ) {
			return;
		}

		// Determine if V2 widgets should load.
		if ( ! tribe_events_widgets_v2_is_enabled() ) {
			return;
		}

		// These hooks always run to provide widget compatibility for v1 to v2 and reverse.
		$this->register_compatibility();

		$this->hook();
		$this->register_assets();
	}


	/**
	 * Registers the provider handling all assets for widgets v2.
	 *
	 * @since 5.5.0
	 */
	protected function register_assets() {
		$assets = new Assets( $this->container );
		$assets->register();

		$this->container->singleton( Assets::class, $assets );
	}

	/**
	 * Registers the provider handling for compatibility hooks.
	 *
	 * @since 5.3.0
	 */
	protected function register_compatibility() {
		$compatibility = new Compatibility();
		$this->container->singleton( Compatibility::class, $compatibility );
		$this->container->singleton( 'events.views.v2.widgets.compatibility', $compatibility );

		add_action( 'tribe_plugins_loaded', [ $compatibility, 'switch_compatibility' ] );
		add_filter( 'option_sidebars_widgets', [ $compatibility, 'remap_list_widget_id_bases' ] );

		add_filter( 'rest_pre_dispatch', [ $this, 'enable_widget_copy_paste' ], 10, 3 );
	}

	/**
	 * Function used to attach the hooks associated with this class.
	 *
	 * @since 5.2.1
	 */
	public function hook() {
		add_filter( 'tribe_widgets', [ $this, 'register_widget' ] );
		add_filter( 'tribe_events_views', [ $this, 'add_views' ] );
	}

	/**
	 * Add the widgets to register with WordPress.
	 *
	 * @since 5.2.1
	 *
	 * @param array<string,string> $widgets An array of widget classes to register.
	 *
	 * @return array<string,string> An array of registered widget classes.
	 */
	public function register_widget( $widgets ) {
		$widgets[ Widget_List::get_widget_slug() ] = Widget_List::class;

		return $widgets;
	}

	/**
	 * Enable widget copy paste for the Legacy Widgets that we are registering.
	 * 
	 * @since TBD
	 * 
	 * @param mixed           $result  The result of the rest request.
	 * @param WP_REST_Server  $server  The REST server.
	 * @param WP_REST_Request $request The REST request.
	 * 
	 * @return mixed The result of the rest request.
	 */
	public function enable_widget_copy_paste( $result, $server, $request ) {
		// Bail if result is already set.
		if ( null !== $result ) {
			return $result;
		}
	
		// Get the route being requested.
		$route = $request->get_route();
		
		// Check if this matches our target endpoint.
		if ( ! preg_match( '#^/wp/v2/widget-types/([a-zA-Z0-9_-]+)/encode$#', $route, $matches ) ) {
			return $result;
		}
	
		// Get the widget type ID from the route.
		$widget_type_id = $matches[1];
	
		// Bail if the widget is not a tribe widget.
		if ( ! str_starts_with( $widget_type_id, 'tribe-widget-' ) ) {
			return $result;
		}

		// Bail if the widget instance is not set.
		if ( ! isset( $request['instance']['encoded'], $request['instance']['hash'] ) ) {
			return $result;
		}

		global $wp_widget_factory;

		$widget_object = $wp_widget_factory->get_widget_object( $widget_type_id );

		// Bail if the widget object is not found.
		if ( ! $widget_object ) {
			return $result;
		}

		// Set the new instance.
		$new_instance         = $request['instance'];
		$serialized_instance  = base64_decode( $request['instance']['encoded'] );
		$new_instance['hash'] = wp_hash( $serialized_instance );

		// Override the instance.
		$request->set_param( 'instance', $new_instance );

		return $result;
	}

	/**
	 * Add the widget views to the view manager.
	 *
	 * @since 5.2.1
	 *
	 * @param array<string,string> $views An associative array of views in the shape `[ <slug> => <class> ]`.
	 *
	 * @return array<string,string> $views The modified array of views in the shape `[ <slug> => <class> ]`.
	 */
	public function add_views( $views ) {
		$views[ Widget_List_View::get_view_slug() ] = Widget_List_View::class;

		return $views;
	}
}
