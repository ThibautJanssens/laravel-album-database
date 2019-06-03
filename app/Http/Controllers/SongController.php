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
        $query = DB::insert('INSERT INTO songs() values (?,?)', 
            []);
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
                ->join('genres', 'songs.genre', '=', 'genres.id')
                ->select('genres.name')
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
