<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'MainController@index');
Route::get('/home', 'MainController@index');
Route::get('/news', 'MainController@index');
Route::get('/credit', 'MainController@index');
Route::get('/cards', 'MainController@index');
Route::get('/insides', 'MainController@index');
Route::get('/suggestions', 'MainController@index');
Route::get('/service', 'MainController@index');
