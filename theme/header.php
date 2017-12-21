<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package pacc
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<header class="header">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <p>Este es un bloque</p>
            </div>
            <div class="col-md-6">
                <p>Este es un bloque</p>
            </div>
            <div class="col-md-6">
                <p>Este es un bloque</p>
            </div>
        </div>
    </div>
</header>