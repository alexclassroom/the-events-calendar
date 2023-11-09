<?php
/**
 * PDF Pass: Body - Event Date
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe/events/integrations/event-tickets-wallet-plus/pdf/pass/body/event/date.php
 *
 * See more documentation about our views templating system.
 *
 * @link https://evnt.is/event-tickets-wallet-plus-tpl Help article for Wallet Plus template files.
 *
 * @since TBD
 *
 * @version TBD
 */

if ( empty( $event ) ) {
	return;
}

$date = $event->schedule_details->value();

if ( empty( $date ) ) {
	return;
}

?>
<table class="tec-tickets__wallet-plus-pdf-event-date-table">
	<tr>
		<td>
			<?php echo $date; // phpcs:ignore ?>
		</td>
	</tr>
</table>
