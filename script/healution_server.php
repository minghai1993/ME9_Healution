<?php
/*
Plugin Name: Healution Server
Description: This enables wordpress to connect to the database.
Author: Elijah
Version: 0.1
*/
    $mydb = new wpdb('map_access','Minghai*8','map_db_it2','localhost');
    $sql = 'CREATE TABLE IF NOT EXISTS suburb(
        suburb_id INT AUTO_INCREMENT,
        postcode int NOT NULL CHECK((postcode between 3000 and 4000) or (postcode between 8000 and 9000)),
        suburb_name varchar(255) NOT NULL,
        sub_lat Decimal(15,12) NOT NULL check(sub_lat BETWEEN  -90 and 90),
        sub_long Decimal(16,12) NOT NULL check(sub_lat BETWEEN  -180 and 180),
        PRIMARY KEY (suburb_id)
    )  ENGINE=INNODB;';
    $mydb->query( $sql );

    $sql = 'CREATE TABLE IF NOT EXISTS sports (
        sp_id INT AUTO_INCREMENT,
        sp_lat Decimal(15,12) NOT NULL check(sp_lat BETWEEN  -90 and 90),
        sp_long Decimal(16,12) NOT NULL check(sp_lat BETWEEN  -180 and 180),
        sp_facilityname VARCHAR(255) NOT NULL,
        sp_name VARCHAR(150) NOT NULL,
        sub_id int NOT NULL,
        act_ind VARCHAR(2) NOT NULL,
        PRIMARY KEY (sp_id),
        FOREIGN KEY (sub_id) REFERENCES suburb(suburb_id)
    )  ENGINE=INNODB;';
    $mydb->query( $sql );

    $sql = 'CREATE TABLE IF NOT EXISTS art (
        art_id INT AUTO_INCREMENT,
        art_name VARCHAR(100) NOT NULL,
        art_lat Decimal(15,12) NOT NULL check(art_lat BETWEEN  -90 and 90),
        art_long Decimal(16,12) NOT NULL check(art_lat BETWEEN  -180 and 180),
        art_address VARCHAR(255) NOT NULL,
        artist VARCHAR(100),
        art_date Date,
        art_asset_type VARCHAR(100) NOT NULL,
        sub_id int NOT NULL,
        PRIMARY KEY (art_id),
        FOREIGN KEY (sub_id) REFERENCES suburb(suburb_id)
    )  ENGINE=INNODB;';
    $mydb->query( $sql );

    $sql = 'CREATE TABLE IF NOT EXISTS monument (
        mmt_id INT AUTO_INCREMENT,
        mmt_theme VARCHAR(200) NOT NULL,
        mmt_subtheme VARCHAR(150) NOT NULL,
        mmt_name VARCHAR(150) NOT NULL,
        mmt_lat Decimal(15,12) NOT NULL check(mmt_lat BETWEEN  -90 and 90),
        mmt_long Decimal(16,12) NOT NULL check(mmt_lat BETWEEN  -180 and 180),
        sub_id int NOT NULL,
        PRIMARY KEY (mmt_id),
        FOREIGN KEY (sub_id) REFERENCES suburb(suburb_id)
    )  ENGINE=INNODB;';
    $mydb->query( $sql );

    $sql = 'CREATE TABLE IF NOT EXISTS drinking_fountain (
        df_id INT AUTO_INCREMENT,
        df_lat Decimal(15,12) NOT NULL check(df_lat BETWEEN  -90 and 90),
        df_long Decimal(16,12) NOT NULL check(df_lat BETWEEN  -180 and 180),
        df_type VARCHAR(200) NOT NULL,
        df_subtype VARCHAR(150) NOT NULL,
        sub_id int NOT NULL,
        PRIMARY KEY (df_id),
        FOREIGN KEY (sub_id) REFERENCES suburb(suburb_id)
    )  ENGINE=INNODB;';
    $mydb->query( $sql );

    $sql = 'CREATE TABLE IF NOT EXISTS railway_station (
        rs_id INT AUTO_INCREMENT,
        rs_stopid int NOT NULL,
        rs_lat Decimal(15,12) NOT NULL check(rs_lat BETWEEN  -90 and 90),
        rs_long Decimal(16,12) NOT NULL check(rs_lat BETWEEN  -180 and 180),
        rs_desc VARCHAR(200) NOT NULL,
        sub_id int NOT NULL,
        PRIMARY KEY (rs_id),
        FOREIGN KEY (sub_id) REFERENCES suburb(suburb_id)
    )  ENGINE=INNODB;';
    $mydb->query( $sql );

    $sql = 'CREATE TABLE IF NOT EXISTS tram (
        tm_id INT AUTO_INCREMENT,
        tm_stopid int NOT NULL,
        tm_lat Decimal(15,12) NOT NULL check(tm_lat BETWEEN  -90 and 90),
        tm_long Decimal(16,12) NOT NULL check(tm_lat BETWEEN  -180 and 180),
        tm_desc VARCHAR(255) NOT NULL,
        sub_id int NOT NULL,
        PRIMARY KEY (tm_id),
        FOREIGN KEY (sub_id) REFERENCES suburb(suburb_id)
    )  ENGINE=INNODB;';
    $mydb->query( $sql );

    $sql = 'CREATE TABLE IF NOT EXISTS bus (
        bs_id INT AUTO_INCREMENT,
        bs_stopid int NOT NULL,
        bs_lat Decimal(15,12) NOT NULL check(bs_lat BETWEEN  -90 and 90),
        bs_long Decimal(16,12) NOT NULL check(bs_lat BETWEEN  -180 and 180),
        bs_desc VARCHAR(255) NOT NULL,
        sub_id int NOT NULL,
        PRIMARY KEY (bs_id),
        FOREIGN KEY (sub_id) REFERENCES suburb(suburb_id)
    )  ENGINE=INNODB;';
    $mydb->query( $sql );


    
function get_suburb(){
    $mydb = new wpdb('map_access','Minghai*8','map_db_it2','localhost');
    $rows = $mydb->get_results("select * from suburb");
    return $rows;
}

add_action('rest_api_init', function () {
    register_rest_route( 'petes-custom-api/v1', '/suburb', array(
        'methods' => 'GET',
        'callback' => 'get_suburb',
    ) );
} );

function get_sports(){
    $mydb = new wpdb('map_access','Minghai*8','map_db_it2','localhost');
    $rows = $mydb->get_results("select * from sports");
    return $rows;
}

add_action('rest_api_init', function () {
    register_rest_route( 'petes-custom-api/v1', '/sports', array(
        'methods' => 'GET',
        'callback' => 'get_sports',
    ) );
} );

function get_art(){
    $mydb = new wpdb('map_access','Minghai*8','map_db_it2','localhost');
    $rows = $mydb->get_results("select * from art");
    return $rows;
}

add_action('rest_api_init', function () {
    register_rest_route( 'petes-custom-api/v1', '/art', array(
        'methods' => 'GET',
        'callback' => 'get_art',
    ) );
} );

function get_monument(){
    $mydb = new wpdb('map_access','Minghai*8','map_db_it2','localhost');
    $rows = $mydb->get_results("select * from monument");
    return $rows;
}

add_action('rest_api_init', function () {
    register_rest_route( 'petes-custom-api/v1', '/monument', array(
        'methods' => 'GET',
        'callback' => 'get_monument',
    ) );
} );

function get_drinking_fountain(){
    $mydb = new wpdb('map_access','Minghai*8','map_db_it2','localhost');
    $rows = $mydb->get_results("select * from drinking_fountain");
    return $rows;
}

add_action('rest_api_init', function () {
    register_rest_route( 'petes-custom-api/v1', '/drinking_fountain', array(
        'methods' => 'GET',
        'callback' => 'get_drinking_fountain',
    ) );
} );

function get_railway_station(){
    $mydb = new wpdb('map_access','Minghai*8','map_db_it2','localhost');
    $rows = $mydb->get_results("select * from railway_station");
    return $rows;
}

add_action('rest_api_init', function () {
    register_rest_route( 'petes-custom-api/v1', '/railway_station', array(
        'methods' => 'GET',
        'callback' => 'get_railway_station',
    ) );
} );

function get_tram(){
    $mydb = new wpdb('map_access','Minghai*8','map_db_it2','localhost');
    $rows = $mydb->get_results("select * from tram");
    return $rows;
}

add_action('rest_api_init', function () {
    register_rest_route( 'petes-custom-api/v1', '/tram', array(
        'methods' => 'GET',
        'callback' => 'get_tram',
    ) );
} );

function get_bus(){
    $mydb = new wpdb('map_access','Minghai*8','map_db_it2','localhost');
    $rows = $mydb->get_results("select * from bus");
    return $rows;
}

add_action('rest_api_init', function () {
    register_rest_route( 'petes-custom-api/v1', '/bus', array(
        'methods' => 'GET',
        'callback' => 'get_bus',
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
