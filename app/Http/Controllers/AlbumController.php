<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AlbumController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $albums = albums::all();
        return response()->json($albums);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $query = DB::insert('INSERT INTO albums(name, release_year, artist, genre, image_url, label, note) 
            values (?, ?, ?, ?, ?, ?, ?)', 
            [$request->name, $request->release_year, $request->artist, $request->genre,
            $request->image_url, $request->label, $request->note]);
        return response()->json(['message' => 'Record saved.']);
    }
    
    /**
     * Display the specified resource in storage
     * 
     * @param \App\Album $album
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $ret = DB::table('albums')
                ->join('artists', 'albums.artist','=','artists.id')
                ->join('genres', 'albums.genre', '=', 'genres.id')
                ->select('artists.name as artist', 'genres.name as genre', 'albums.name', 'albums.release_year', 'albums.image_url', 'albums.label', 'albums.note')
                ->where('albums.id','=', $id)
                ->get();
        return $ret;            
    }

    /**
     * Update the specified resource from storage
     * 
     * @param \Illuminate\Http\Request $request
     * @param \App\Album $album
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        DB::update('UPDATE albums SET name = ?, release_year = ?, artist = ?, genre = ?, 
            image_url = ?, label = ?, note = ? where id = ?', 
            [$request->name, $request->release_year, $request->artist, 
            $request->genre, $request->image_url, $request->label, $request->note, $id]);
        return response()->json(['message' => 'Record updated']);
    }
    
    public function getByDate(Request $request, $date)
    {
        $ret = DB::table('albums')
                ->join('artists', 'albums.artist','=','artists.id')
                ->join('genres', 'albums.genre', '=', 'genres.id')
                ->select('artists.name as artist', 'genres.name as genre', 'albums.name', 'albums.release_year', 'albums.image_url', 'albums.label', 'albums.note')
                ->where('albums.release_year','=', $date)
                ->get();
        return $ret;      
    }

    public function getByGenre(Request $request, $genre)
    {
        $ret = DB::table('albums')
                ->join('artists', 'albums.artist','=','artists.id')
                ->join('genres', 'albums.genre', '=', 'genres.id')
                ->select('artists.name as artist', 'genres.name as genre', 'albums.name', 'albums.release_year', 'albums.image_url', 'albums.label', 'albums.note')
                ->where('albums.genre','=', $genre)
                ->get();
        return $ret;      
    }
}
