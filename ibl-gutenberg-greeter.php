<?php
/**
 * Plugin Name:       IBL Education Gutenberg Greeter
 * Plugin URI:        www.animashaunmichael.com
 * Description:       IBL Education Gutenberg Greeter
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Michael ANIMASHAUN
 * License:           -
 * License URI:       -
 * Text Domain:       ibl-gutenberg-greeter
 * Domain Path:       -
 * Update URI:        -
 *
 * @package           ibl-gutenberg-greeter
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function ibl_gutenberg_greeter_ibl_gutenberg_greeter_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'ibl_gutenberg_greeter_ibl_gutenberg_greeter_block_init' );
