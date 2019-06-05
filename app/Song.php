<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    protected $fillable = [
        'title',
        'duration', 
        'album',
        'artist',
        'genre'
    ];

    public function albums(){
        return $this->belongsTo('App\Album', 'album');
    }

    public function genre(){
        return $this->belongsTo('App\Genre', 'genre');
    }

    public function artist(){
        return $this->belongsTo('App\Artist', 'artist');
    }
}