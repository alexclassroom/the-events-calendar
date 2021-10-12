<?php
/**
 * Validates an End Date UTC input.
 *
 * @since   TBD
 *
 * @package TEC\Custom_Tables\V1\Models\Validators
 */

namespace TEC\Custom_Tables\V1\Models\Validators;

use TEC\Custom_Tables\V1\Models\Model;

/**
 * Class Positive_Integer
 *
 * @package TEC\Custom_Tables\V1\Models\Validators
 */
class Positive_Integer extends Validation {
	/**
	 * @var Validator
	 */
	private $present;

	/**
	 * Positive_Integer constructor.
	 *
	 * @since TBD
	 *
	 * @param  Present  $present  The present validator.
	 */
	public function __construct( Present $present ) {
		$this->present = $present;
	}

	/**
	 * {@inheritDoc}
	 */
	public function validate( Model $model, $name, $value ) {
		$this->error_message = '';

		$valid = $this->present->validate( $model, $name, $value )
		         && is_numeric( $value )
		         && $value == (int) $value
		         && abs( $value ) === (int) $value
		         && $value;

		if ( $valid ) {
			return true;
		}

		$this->error_message = 'The provided value was not a valid positive integer.';

		return false;
	}
}