<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    protected $fillable = [
        'name',
        'genre'
    ];

    public function albums(){
        return $this->hasMany('App\Album', 'album');
    }

    public function songs(){
        return $this->hasMany('App\Song', 'song');
    }

    public function genre(){
        return $this->belongsTo('App\Genre', 'genre');
    }
}
