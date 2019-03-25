<?php

use Faker\Generator as Faker;

$factory->define(App\Album::class, function (Faker $faker) {
    return [

        'pochette' => $faker->imageUrl($width = 640, $height = 480),
        'nom_artiste'=>$faker->name(),
        'nom_album'=>$faker->name(),
        'genre'=>$faker->word(),
        'prodyear'=>$faker->year($max = 'now'),
        'label'=>$faker->word(),
        'songs'=>$faker->text(),
        'note'=>$faker->randomDigit()
    ];
});
