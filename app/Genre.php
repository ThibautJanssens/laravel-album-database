<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    protected $fillable = [
        'name'
    ];

    public function albums(){
        return $this->belongsToMany('App\Albums', 'albums');
    }

    public function songs(){
        return $this->belongsToMany('App\Songs', 'songs');
    }

    public function artists(){
        return $this->belongsToMany('App\Artist', 'artists');
    }
}
