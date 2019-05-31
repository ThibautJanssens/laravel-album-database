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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//-------------- ALBUMS --------------
//get all albums
Route::get('/albums', 'AlbumController@index')->name('albums.all');
//post insert album
Route::post('/album', 'AlbumController@store')->name('album.store');
//put edit album
Route::put('/album/{id}', 'AlbumController@update')->('album.update');

//-------------- ARTISTS --------------
//get all artists
Route::get('/artists', 'ArtistController@index')->name('artists.all');
//post insert artist
Route::post('/artist', 'ArtistController@store')->name('artist.store');
//put edit artist
Route::put('/artist/{id}', 'ArtistController@update')->('artist.update');

//-------------- SONGS --------------
//get all songs
Route::get('/songs', 'SongController@index')->name('songs.all');
//post insert song
Route::post('/song', 'SongController@store')->name('song.store');
//put edit song
Route::put('/song/{id}', 'SongController@update')->('song.update');

//-------------- GENRES --------------
//get all genres
Route::get('/genres', 'GenreController@index')->name('genres.all');
//post insert genre
Route::post('/genre', 'GenreController@store')->name('genre.store');
//put edit genre
Route::put('/genre/{id}', 'GenreController@update')->('genre.update');

//-------------- USERS --------------
//register
Route::post('/register', 'AuthController@register');
//login
Route::post('/login', 'AuthController@login');
//logout
Route::post('/logout', 'AuthController@logout');