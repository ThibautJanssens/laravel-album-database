<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    protected $fillable = [
        'name'
    ];

    public function albums(){
        return $this->belongsToMany('App\Album', 'album');
    }

    public function songs(){
        return $this->belongsToMany('App\Song', 'song');
    }

    public function artists(){
        return $this->belongsToMany('App\Artist', 'artists');
    }
}
