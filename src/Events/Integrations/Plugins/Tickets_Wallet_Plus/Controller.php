<?php

namespace TEC\Events\Integrations\Plugins\Tickets_Wallet_Plus;

use TEC\Common\Integrations\Traits\Plugin_Integration;
use TEC\Events\Integrations\Integration_Abstract;
use TEC\Tickets_Wallet_Plus\Controller as Tickets_Wallet_Plus;
use Tribe__Template;

/**
 * Class Controller
 *
 * @since TBD
 *
 * @package TEC\Events\Integrations\Plugins\Tickets_Wallet_Plus
 */
class Controller extends Integration_Abstract {
	use Plugin_Integration;

	/**
	 * @inheritDoc
	 */
	public static function get_slug(): string {
		return 'event-tickets-wallet-plus';
	}

	/**
	 * @inheritDoc
	 */
	public function load_conditionals(): bool {
		return $this->container->make( Tickets_Wallet_Plus::class )->is_active();
	}

	/**
	 * @inheritDoc
	 */
	protected function load(): void {
		$this->register_actions();
		$this->register_filters();
	}

	/**
	 * Register actions.
	 *
	 * @since TBD
	 *
	 * @return void
	 */
	public function register_actions() {
		add_action( 'tribe_template_after_include:tickets-wallet-plus/pdf/pass/styles', [ $this, 'add_styles_to_pdf' ], 10, 3 );
		add_action( 'tribe_template_before_include:tickets-wallet-plus/pdf/pass/body/sidebar', [ $this, 'add_venue_to_pdf' ], 10, 3 );
		add_action( 'tribe_template_before_include:tickets-wallet-plus/pdf/pass/body/post-title', [ $this, 'add_event_date_to_pdf' ], 10, 3 );
	}

	/**
	 * Register filters.
	 *
	 * @since TBD
	 *
	 * @return void
	 */
	public function register_filters() {
		add_filter( 'tec_tickets_wallet_plus_pdf_pass_template_vars', [ $this, 'filter_pdf_template_context' ] );
		add_filter( 'tec_tickets_wallet_plus_apple_pass_data', [ $this, 'add_event_date_to_apple_pass_data' ], 10, 3 );
		add_filter( 'tec_tickets_wallet_plus_apple_pass_data', [ $this, 'add_venue_to_apple_pass_data' ], 10 , 3);
		add_filter( 'tec_tickets_wallet_plus_pdf_sample_template_context', [ $this, 'add_event_data_to_pdf_sample' ] );
	}

	/**
	 * Filter PDF template context.
	 *
	 * @since TBD
	 *
	 * @param array $context Template context.
	 *
	 * @return array
	 */
	public function filter_pdf_template_context( $context ): array {
		return $this->container->make( Passes\Pdf::class )->filter_template_context( $context );
	}

	/**
	 * Add styles to PDF.
	 *
	 * @since TBD
	 *
	 * @param string          $file     Path to the file.
	 * @param string          $name     Name of the file.
	 * @param Tribe__Template $template Template instance.
	 *
	 * @return void
	 */
	public function add_styles_to_pdf( $file, $name, $template ) {
		$this->container->make( Passes\Pdf::class )->add_tec_styles( $file, $name, $template );
	}

	/**
	 * Add venue to PDF.
	 *
	 * @since TBD
	 *
	 * @param string          $file     Path to the file.
	 * @param string          $name     Name of the file.
	 * @param Tribe__Template $template Template instance.
	 *
	 * @return void
	 */
	public function add_venue_to_pdf( $file, $name, $template ) {
		$this->container->make( Passes\Pdf::class )->add_venue( $file, $name, $template );
	}

	/**
	 * Add event date to PDF.
	 *
	 * @since TBD
	 *
	 * @param string          $file     Path to the file.
	 * @param string          $name     Name of the file.
	 * @param Tribe__Template $template Template instance.
	 *
	 * @return void
	 */
	public function add_event_date_to_pdf( $file, $name, $template ) {
		$this->container->make( Passes\Pdf::class )->add_event_date( $file, $name, $template );
	}

	/**
	 * Add event data to PDF sample.
	 *
	 * @since TBD
	 *
	 * @param array $context Template context.
	 *
	 * @return array
	 */
	public function add_event_data_to_pdf_sample( $context ): array {
		return $this->container->make( Passes\Pdf::class )->add_event_data_to_sample( $context );
	}

	/**
	 * Add Event Data to the Apple Wallet Pass.
	 *
	 * @since TBD
	 *
	 * @param array $pass_data The Apple Pass data.
	 * @param array $attendee  The attendee data.
	 */
	public function add_event_date_to_apple_pass_data( $pass_data, $attendee ) {
		return $this->container->make( Passes\Apple_Wallet\Event_Modifier::class )->include_event_data( $pass_data, $attendee );
	}

	/**
	 * Add Venue Data to the Apple Wallet Pass.
	 *
	 * @since TBD
	 *
	 * @param array $pass_data The Apple Pass data.
	 * @param array $attendee  The attendee data.
	 */
	public function add_venue_to_apple_pass_data( $pass_data, $attendee ) {
		return $this->container->make( Passes\Apple_Wallet\Event_Modifier::class )->include_venue_data( $pass_data, $attendee );
	}
}