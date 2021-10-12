<?php
/**
 * Validates a Start Date UTC input.
 *
 * @since   TBD
 *
 * @package TEC\Custom_Tables\V1\Models\Validators
 */

namespace TEC\Custom_Tables\V1\Models\Validators;

use TEC\Custom_Tables\V1\Models\Model;
use Tribe__Date_Utils as Dates;

/**
 * Class Start_Date_UTC
 *
 * @since   TBD
 *
 * @package TEC\Custom_Tables\V1\Models\Validators
 */
class Duration extends Validation {
	/**
	 * @var Positive_Integer
	 */
	private $positive_integer_validator;

	/**
	 * Duration constructor.
	 *
	 * @param  Valid_Date        $date_validator              A reference to the Date validator.
	 * @param  Range_Dates       $range_dates_validator       A reference to the Dates Range validator.
	 * @param  Positive_Integer  $positive_integer_validator  A reference to the Positive Integer validator.
	 */
	public function __construct( Positive_Integer $positive_integer_validator) {
		$this->positive_integer_validator = $positive_integer_validator;
	}

	/**
	 * {@inheritDoc}
	 */
	public function validate( Model $model, $name, $value ) {
		$this->error_message = '';
		// Duration cannot be 0
		if ( ! $this->positive_integer_validator->validate( $model, 'duration', $value ) ) {
			$this->error_message = 'Duration must be a positive integer';

			return false;
		}

		$duration = (int) $value;

		if ( $model->start_date && $model->end_date ) {
			// If possible, validate against the entry Start and End Dates.
			if ( ! $this->check_against_dates( $model->start_date, $model->end_date, $duration ) ) {
				$this->error_message = "The {$duration} is greater that the duration of the event";

				return false;
			}
		}

		if ( $model->start_date_utc && $model->end_date_utc ) {
			// If possible, validate against the entry Start and End Dates.
			if ( ! $this->check_against_dates( $model->start_date_utc, $model->end_date_utc, $duration ) ) {
				$this->error_message = "The {$duration} is greater that the duration of the event";

				return false;
			}
		}

		return true;
	}

	/**
	 * Checks the duration against a date couple.
	 *
	 * The Duration value represents the value of a single event occurrence.
	 * As such it should be less than, or equal for Single Events, to the difference between End and Start.
	 *
	 * @since TBD
	 *
	 * @param  string|int|\DateTimeInterface  $start_date  The Start Date.
	 * @param  string|int|\DateTimeInterface  $end_date    The End Date.
	 * @param  int                            $duration    The Duration value.
	 *
	 * @return bool Whether the Duration value is valid when validated in the context of the Dates or not.
	 */
	private function check_against_dates( $start_date, $end_date, $duration ) {
		$start_date_object = Dates::build_date_object( $start_date );
		$end_date_object   = Dates::build_date_object( $end_date );
		$date_duration     = $end_date_object->getTimestamp() - $start_date_object->getTimestamp();

		return $date_duration >= $duration;
	}
}