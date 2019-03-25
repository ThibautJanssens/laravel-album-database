<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('logout', 'ApiAuthController@logout');
Route::post('refresh', 'ApiAuthController@refresh');
Route::get('user', 'ApiAuthController@user');

Route::post('album', 'AlbumController@create');
Route::get('album', 'AlbumController@read');
Route::put('album', 'AlbumController@update');
Route::delete('album', 'AlbumController@delete');

Route::post('band', 'BandController@create');
Route::get('band', 'BandController@index');
//Route::get('band', 'BandController@read');
Route::put('band', 'BandController@update');
Route::delete('band', 'BandController@delete');

    Route::post('song', 'AlbumController@create');
    Route::get('song', 'AlbumController@read');
    Route::put('song', 'AlbumController@update');
    Route::delete('song', 'SongController@delete');

Route::post('signUp', 'AuthController@signUp');

Route::post('login', 'AuthController@login');
