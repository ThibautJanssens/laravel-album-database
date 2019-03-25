<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Band extends Model
{
    protected $fillable = [
        'name',
        'comment'
    ];

    public function albums (){
        return $this->hasMany(Album::class);
    }

    public function comments(){
        return $this->hasMany(Comment::class);
    }
}
