<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    protected $fillable = [
      'pochette',
      'nom_artiste',
      'nom_album',
      'genre',
      'prodyear',
      'label',
      'songs',
      'note'
  ];
}
