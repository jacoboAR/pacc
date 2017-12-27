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
    <div class="pre-nav"></div>

    <nav class="nav">
        <div class="nav__logo">
            <a href="/">
                <img class="nav__logo-img" src="http://localhost:8000/wp-content/themes/pacc/dist/images/logo.svg" alt="logo">
            </a>
        </div>
        <?php
            wp_nav_menu( array(
                'menu_class' => 'nav__menu',
                'menu_id' => 'nav__menu',
                'container' => false
            ) );
        ?>
    </nav>

</header>