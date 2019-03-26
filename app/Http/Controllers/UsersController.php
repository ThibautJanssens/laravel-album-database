<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\requests;
use App\Http\Controllers\Controller;

class UsersController extends Controller
{
  public function getInfos()
  {
    return view('infos');
  }

  public function postInfos(Request $request)
  {
    return 'Name is ' . $request->input('nom');
  }
}
