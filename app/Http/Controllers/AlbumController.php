<?php

namespace App\Http\Controllers;

use App\Album;
use Illuminate\Http\Request;

class AlbumController extends Controller
{
    public function index()
    {
        $Albums = Album::all();

        return response()->json($Albums);
    }

    public function store(Request $request)
    {
        $request->validate([
            'pochette' => 'required',
            'nom_artiste' => 'required',
            'nom_album' => 'required',
            'genre' => 'required',
            'prodyear' => 'required',
            'label' => 'required',
            'songs' => 'required',
            'note' => 'required'
        ]);

        $Album = Album::create($request->all());

        return response()->json([
            'message' => 'Great success! New Album created',
            'Album' => $Album
        ]);
    }

    public function show(Album $Album)
    {
        return $Album;
    }

    public function update(Request $request, Album $Album)
    {
        $request->validate([
          'pochette' => 'nullable',
          'nom_artiste' => 'nullable',
          'nom_album' => 'nullable',
          'genre' => 'nullable',
          'prodyear' => 'nullable',
          'label' => 'nullable',
          'songs' => 'nullable',
          'note' => 'nullable'
        ]);

        $Album->update($request->all());

        return response()->json([
            'message' => 'Great success! Album updated',
            'Album' => $Album
        ]);
    }

    public function destroy(Album $Album)
    {
        $Album->delete();

        return response()->json([
            'message' => 'Successfully deleted Album!'
        ]);
    }
}
