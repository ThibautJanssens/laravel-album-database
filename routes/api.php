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
//get an album
Route::get('album/{id}', 'AlbumController@show')->name('album.show');
//get all albums by specific date
Route::get('/albumsByDate/{date}', 'AlbumController@getByDate')->name('albums.date');
//Get all albums by genre
Route::get('/albumsByGenre/{genre}', 'AlbumController@getByGenre')->name('albums.genre');
//post insert album
Route::middleware('auth:api')->post('/album', 'AlbumController@store')->name('album.store');
//put edit album
Route::middleware('auth:api')->put('/album/{id}', 'AlbumController@update')->name('album.update');

//-------------- ARTISTS --------------
//get all artists
Route::get('/artists', 'ArtistController@index')->name('artists.all');
//get an artist
Route::get('/artist/{id}', 'ArtistController@show')->name('artist.show');
//post insert artist
Route::middleware('auth:api')->post('/artist', 'ArtistController@store')->name('artist.store');
//put edit artist
Route::middleware('auth:api')->put('/artist/{id}', 'ArtistController@update')->name('artist.update');

//-------------- SONGS --------------
//get all songs
Route::get('/songs', 'SongController@index')->name('songs.all');
//get a song
Route::get('/song/{id}', 'SongController@show')->name('song.show');
//post insert song
Route::middleware('auth:api')->post('/song', 'SongController@store')->name('song.store');
//put edit song
Route::middleware('auth:api')->put('/song/{id}', 'SongController@update')->name('song.update');

//-------------- GENRES --------------
//get all genres
Route::get('/genres', 'GenreController@index')->name('genres.all');
//post insert genre
Route::middleware('auth:api')->post('/genre', 'GenreController@store')->name('genre.store');
//put edit genre
Route::middleware('auth:api')->put('/genre/{id}', 'GenreController@update')->name('genre.update');

//-------------- USERS --------------
//register
Route::post('/register', 'AuthController@register');
//login
Route::post('/login', 'AuthController@login');
//logout
Route::post('/logout', 'AuthController@logout');