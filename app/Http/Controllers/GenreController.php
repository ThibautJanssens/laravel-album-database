<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GenreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $genres = genres::all();
        return response()->json($genres);
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $query = DB::insert('INSERT INTO genres(name) values (?)', [$request->name]);
        return response()->json(['message' => 'Record saved.']);
    }
    
    /**
     * Update the specified resource from storage
     * 
     * @param \Illuminate\Http\Request $request
     * @param \App\Genre $genre
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        DB::update('UPDATE genres SET name = ? where id = ?', [$request->name, $id]);
        return response()->json(['message' => 'Record updated']);
    }
}
