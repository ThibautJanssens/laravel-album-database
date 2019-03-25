<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    protected $fillable = [
        'title',
        'label',
        'img',
        'year',
        'genre',
        'band',
        'note',
        'comment'
    ];
}
