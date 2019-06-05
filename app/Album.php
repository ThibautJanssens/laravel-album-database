<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    protected $fillable = [
        'name',
        'release_year',
        'artist',
        'genre',
        'image_url',
        'label', 
        'note'
    ];

    public function songs(){
        return $this->hasMany('App\Song', 'song');
    }

    public function genre(){
        return $this->belongsTo('App\Genre', 'genre');
    }

    public function artist(){
        return $this->belongsTo('App\Artist', 'artist');
    }
}
