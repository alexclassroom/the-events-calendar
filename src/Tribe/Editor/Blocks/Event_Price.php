<?php
class Tribe__Events__Editor__Blocks__Event_Price
extends Tribe__Editor__Blocks__Abstract {
	use TEC\Events\Traits\Block_Trait;

	/**
	 * Which is the name/slug of this block
	 *
	 * @since 4.7
	 *
	 * @return string
	 */
	public function slug() {
		return 'event-price';
	}

	/**
	 * Set the default attributes of this block
	 *
	 * @since 4.7
	 *
	 * @return array
	 */
	public function default_attributes() {

		return [
			'cost' => tribe_get_formatted_cost(),
		];
	}

	/**
	 * Since we are dealing with a Dynamic type of Block we need a PHP method to render it
	 *
	 * @since 4.7
	 *
	 * @param  array $attributes
	 *
	 * @return string
	 */
	public function render( $attributes = [] ) {
		$args['attributes'] = $this->attributes( $attributes );

		// Add the rendering attributes into global context
		tribe( 'events.editor.template' )->add_template_globals( $args );

		return tribe( 'events.editor.template' )->template( [ 'blocks', $this->slug() ], $args, false );
	}
}
