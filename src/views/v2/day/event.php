<?php
/**
 * View: Day Event
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/events/views/v2/day/event.php
 *
 * See more documentation about our views templating system.
 *
 * @link {INSERT_ARTCILE_LINK_HERE}
 *
 * @version TBD
 *
 */

$classes = get_post_class( [ 'tribe-common-g-row', 'tribe-common-g-row--gutters', 'tribe-events-calendar-day__event' ], $event->ID );

if ( $event->featured ) {
	$classes[] = 'tribe-events-calendar-day__event--featured';
}

?>
<article <?php tribe_classes( $classes ); ?>>

	<?php $this->template( 'day/event/featured-image', [ 'event' => $event ] ); ?>

	<div class="tribe-events-calendar-day__event-details tribe-common-g-col">

		<header class="tribe-events-calendar-day__event-header">
			<?php $this->template( 'day/event/date', [ 'event' => $event ] ); ?>
			<?php $this->template( 'day/event/title', [ 'event' => $event ] ); ?>
			<?php $this->template( 'day/event/venue', [ 'event' => $event ] ); ?>
		</header>

		<?php $this->template( 'day/event/description', [ 'event' => $event ] ); ?>

	</div>

</article>
