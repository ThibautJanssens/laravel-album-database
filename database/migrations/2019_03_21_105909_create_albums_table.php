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
        Schema::create('albums', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->string('label');
            $table->string('img');
            $table->year('year');
            $table->integer('genre');
            $table->integer('band');
            $table->integer('comment');
            $table->integer('note');
            $table->foreign('comment')->references('id')->on('comments');
            $table->foreign('genre')->references('id')->on('genres');
            $table->foreign('band')->references('id')->on('bands');
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
        Schema::dropIfExists('albums');
    }
}
