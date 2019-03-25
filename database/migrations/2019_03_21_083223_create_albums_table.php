<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAlbumsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('albums', function(Blueprint $table){
          $table->increments('id');
          $table->string('pochette');
          $table->string('nom_artiste');
          $table->string('nom_album');
          $table->string('genre');
          $table->year('prodyear');
          $table->string('label');
          $table->string('songs');
          $table->integer('note');
          $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('albums');
    }
}
