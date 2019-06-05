<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArtistController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $artists = artists::all();
        return response()->json($artists);
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $query = DB::insert('INSERT INTO artists(name, genre) values (?,?)', [$request->name, $request->genre]);
        return response()->json(['message' => 'Record saved.']);
    }
    
    /**
     * Display the specified resource in storage
     * 
     * @param \App\Artist $artist
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $ret = DB::table('artists')
                ->join('genres', 'artists.genre', '=', 'genres.id')
                ->select('artists.name as artist', 'genres.name as genre')
                ->where('artists.id','=', $id)
                ->get();

        return $ret;            
    }

    /**
     * Update the specified resource from storage
     * 
     * @param \Illuminate\Http\Request $request
     * @param \App\Artist $artist
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        DB::update('UPDATE artists SET name = ?, genre = ? where id = ?', [$request->name, $request->genre, $id]);
        return response()->json(['message' => 'Record updated']);
    }
}
