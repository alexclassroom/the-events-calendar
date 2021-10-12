<?php
/**
 * The API provided by all Providers that allow their registration and unregistration.
 *
 * @since   TBD
 *
 * @package TEC\Custom_Tables\V1\WP_Query
 */

namespace TEC\Custom_Tables\V1\WP_Query;

/**
 * Interface Provider_Contract
 *
 * @since   TBD
 *
 * @package TEC\Custom_Tables\V1\WP_Query
 */
interface Provider_Contract {
	/**
	 * Register the filters and DI container bindings required to integrate the plugin custom tables logic.
	 *
	 * @since TBD
	 */
	public function register();

	/**
	 * Unregisters the filters registered by the provider.
	 *
	 * @since TBD
	 */
	public function unregister();
}
