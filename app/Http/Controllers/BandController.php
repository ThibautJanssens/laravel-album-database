<?php

namespace App\Http\Controllers;

use App\Band;
use Illuminate\Http\Request;

class BandController extends Controller
{
    public function index(){
        $bands = Band::all();
        return $bands->toJson();
    }

    public function store(Request $request){
        $validatedData = $request->validate(
            [
                'name' => 'required',
            ]
        );

        $band = Band::create(
            [
                'name' => $validatedData['name'],
            ]
        );

        return response()->json('Band added.');
    }

    public function show($id){
        $band = Band::with(
            [
                'id' => function ($query) {
                    $query->where('id', $id);
                }
            ]
        )->find($id);

          return $band->toJson();
    }
}
