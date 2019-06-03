<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SongController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $songs = songs::all();
        return response()->json($songs);
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $query = DB::insert('INSERT INTO songs(title, duration, album, artist, genre) values (?,?,?,?,?)', 
            [$request->title, $request->duration, $request->album, $request->artist, $request->genre]);
        return response()->json(['message' => 'Record saved.']);
    }
    
    /**
     * Display the specified resource in storage
     * 
     * @param \App\Song $song
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $ret = DB::table('songs')
                ->join('albums', 'songs.album', '=', 'albums.id')
                ->join('artists', 'songs.artist','=','artists.id')
                ->join('genres', 'songs.genre', '=', 'genres.id')
                ->select('artists.name, albums.name, genres.name, songs.*')
                ->where('songs.id','=', $id)
                ->get();
        return $ret;            
    }

    /**
     * Update the specified resource from storage
     * 
     * @param \Illuminate\Http\Request $request
     * @param \App\Song $song
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        DB::update('UPDATE songs SET  where id = ?', 
            [$id]);
        return response()->json(['message' => 'Record updated']);
    }
}
