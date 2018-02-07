<?php

function theme_enqueue_styles() {
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array( 'avada-stylesheet' ) );
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );

function avada_lang_setup() {
	$lang = get_stylesheet_directory() . '/languages';
	load_child_theme_textdomain( 'Avada', $lang );
}
add_action( 'after_setup_theme', 'avada_lang_setup' );

if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page(array(
		'page_title'=>'Mercadeo Options',
		'menu_title' => '',
		'menu_slug' => 'mercadeo_options',
		'capability' => 'edit_posts',
		'position' => false,
		'parent_slug' => '',
		'icon_url' => false,
		'redirect' => true,
		'post_id' => 'mercadeo_options',
		'autoload' => false
	));
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Header Settings',
		'menu_title' 	=> 'Header Settings',
		'redirect' 		=> false,
		'parent_slug' => 'mercadeo_options',
	));
	
}