<?php
require_once '/var/www/html/wp-load.php';

do_action( 'init' );

foreach ( WP_Block_Type_Registry::get_instance()->get_all_registered() as $name => $block ) {
	$api = isset( $block->api_version ) ? $block->api_version : null;
	if ( $api && $api < 3 ) {
		echo $name . " api=" . $api . PHP_EOL;
	}
}
