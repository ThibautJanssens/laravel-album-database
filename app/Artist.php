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
        return $this->hasMany('App\Albums', 'albums');
    }

    public function songs(){
        return $this->hasMany('App\Songs', 'songs');
    }

    public function genre(){
        return $this->belongsTo('App\Genre', 'genre');
    }
}
