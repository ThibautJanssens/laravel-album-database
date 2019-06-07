<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Song;
use Illuminate\Support\Facades\DB;

class SongController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $songs = Song::all();
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
                ->select('artists.name as artist, albums.name as album, genres.name as genre, songs.title, songs.duration')
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
        DB::update('UPDATE songs SET title = ?, duration = ?, album = ?, artist = ?, 
            genre = ? where id = ?', 
            [$request->title, $request->duration, $request->album, 
            $request->artist, $request->genre, $id]);
        return response()->json(['message' => 'Record updated']);
    }
}
