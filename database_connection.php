<?php
/*
Plugin Name: Family Care API
Description: This enables wordpress to connect to the database.
Author: Elijah
Version: 0.1
*/

/**
 * Documentation worth reading:
 *  - https://codex.wordpress.org/Writing_a_Plugin
 *  - https://codex.wordpress.org/Creating_Tables_with_Plugins
 *
 * Testing your API:
 *
 * There is some example JavaScript below, but you could equally visit the URL directly in your browser by typing the
 * URL '/?rest_route=/petes-custom-api/v1/data-from-db' into the address bar of your browser.
 *
 * Examples of how to access this API with JavaScript:
 *
 * Some example JavaScript to access this API, if you are using JQuery in your project. It will perform a GET request
 * to the API, asking for some data from the database. Upon receiving this data, it will look for a DOM element with
 * an id of "result-wrapper" and populate it with some text:
 *
 * jQuery.get(
 *   '/?rest_route=/petes-custom-api/v1/data-from-db',
 *   function(result) {
 *     var total = result.total;
 *     jQuery('#result-wrapper').html("Found " + total + " things in the database!");
 *   }
 * );
 */

/**
 * This is a dumb function that doesn't talk to the database at all.
 * However, perhaps you want to do some custom business logic, complex modelling, etc here which can't be done in the browser.
 */
// function petes_custom_api_get_data() {
//     return "Data";
// }

// function generateRandomString($length = 20) {
//     return substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil($length/strlen($x)) )),1,$length);
// }

/**
 * Talks to the database using the WordPress database API.
 * Information on workign with this can be found around the web, including: https://www.sitepoint.com/working-with-databases-in-wordpress/
 * @return string
 */

$mydb = new wpdb('map_access','Minghai*8','map_db_it2','localhost');


function read_suburb(){
    $rows = $mydb->get_results("select * from Suburb");
    return $rows;
}
// function petes_custom_api_get_data_from_db() {

//     global $wpdb;
//     $wpdb->insert(
//          $wpdb-> prefix . "family",
//             array(
//                 'name' => $_GET['name'],
//                 'secret_id' => generateRandomString()
//             )
//             );

    // Use the insert_id to lookup the row we just created.
    // return $row['secret_id'];

//     $pk = $wpdb->insert_id;
//     $secret_key = get_var($wpdb->prepare(
//         "
//         SELECT secret_id
//         FROM $wpdb->"wp_family"
//         WHERE secret_id = %s
//         ", $pk
//     ));
//     return $secret_key;

// }

// function save_visit() {

//     global $wpdb;
//     $wpdb->insert(
//         $wpdb-> prefix . "visit",
//         array(
//             'visitor_name' => $_GET['visitor_name'],
//             'visit_date' => $_GET['visit_date'],
//             'visit_duration' => $_GET['visit_duration']
//         )
//     );

//     // Use the insert_id to lookup the row we just created.
//     // return $row['secret_id'];

//     return $wpdb->insert_id;
// }

/**
 * Register the endpoint "/index.php/wp-json/custom-api/v1/data" with the WP REST API.
 * When that URL is invoked, call the PHP function "custom_api_get_data".
 */
add_action('rest_api_init', function () {
    register_rest_route( 'petes-custom-api/v1', '/data', array(
        'methods' => 'GET',
        'callback' => 'petes_custom_api_get_data',
    ) );
} );

// add_action('rest_api_init', function () {
//     register_rest_route( 'petes-custom-api/v1', '/data-from-db', array(
//         'methods' => 'GET',
//         'callback' => 'petes_custom_api_get_data_from_db',
//     ) );
// } );

// add_action('rest_api_init', function () {
//     register_rest_route( 'petes-custom-api/v1', '/save_visit', array(
//         'methods' => 'GET',
//         'callback' => 'save_visit',
//     ) );
// } );
