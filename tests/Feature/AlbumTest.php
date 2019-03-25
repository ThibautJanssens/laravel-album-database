<?php

namespace Tests\Feature;

use App\Album;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class AlbumTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function it_will_show_all_albums()
    {
        $Albums = factory(Album::class, 10)->create();

        $response = $this->get(route('albums.all'));

        $response->assertStatus(200);

        $response->assertJson($Albums->toArray());
    }

    /** @test */
    public function it_will_create_albums()
    {
        $response = $this->post(route('albums.store'), [
          'pochette'=> 'je suis une pochette',
          'nom_artiste'=>'je suis une artiste',
          'nom_album'=>'je suis une album',
          'genre'=>'je suis une genre',
          'prodyear'=>2003,
          'label'=>'je suis une label',
          'songs'=>'je suis une songs',
          'note' =>0
        ]);

        $response->assertStatus(200);

        $this->assertDatabaseHas('albums', [
            'pochette' => 'je suis une pochette'
        ]);

        $response->assertJsonStructure([
            'message',
            'Album' => [
                'pochette',
                'nom_artiste',
                'nom_album',
                'genre',
                'prodyear',
                'label',
                'songs',
                'note',
                'updated_at',
                'created_at',
                'id'
            ]
        ]);
    }

    /** @test */
    public function it_will_show_a_Album()
    {
        $this->post(route('albums.store'), [
          'pochette'=> 'je suis une pochette',
          'nom_artiste'=>'je suis une artiste',
          'nom_album'=>'je suis une album',
          'genre'=>'je suis une genre',
          'prodyear'=>2003,
          'label'=>'je suis une label',
          'songs'=>'je suis une songs',
          'note' =>0
        ]);

        $album = Album::all()->first();
        $response = $this->get(route('albums.show', $album->id));

        $response->assertStatus(200);

        $response->assertJson($album->toArray());
    }

    /** @test */
    public function it_will_update_a_Album()
    {
        $this->post(route('albums.store'), [
          'pochette'=> 'je suis une pochette',
          'nom_artiste'=>'je suis une artiste',
          'nom_album'=>'je suis une album',
          'genre'=>'je suis une genre',
          'prodyear'=>2003,
          'label'=>'je suis une label',
          'songs'=>'je suis une songs',
          'note' =>0
        ]);

        $Album = Album::all()->first();

        $response = $this->put(route('albums.update', $Album->id), [
            'pochette' => 'This is the updated title'
        ]);

        $response->assertStatus(200);

        $Album = $Album->fresh();

        $this->assertEquals($Album->pochette, 'This is the updated title');

        $response->assertJsonStructure([
           'message',
           'Album' => [
               'pochette',
               'nom_artiste',
               'nom_album',
               'genre',
               'prodyear',
               'label',
               'songs',
               'note',
               'updated_at',
               'created_at',
               'id'
           ]
       ]);
    }

    /** @test */
    public function it_will_delete_a_Album()
    {
        $this->post(route('albums.store'), [
          'pochette'=> 'je suis une pochette',
          'nom_artiste'=>'je suis une artiste',
          'nom_album'=>'je suis une album',
          'genre'=>'je suis une genre',
          'prodyear'=>2003,
          'label'=>'je suis une label',
          'songs'=>'je suis une songs',
          'note' =>0
        ]);

        $album = Album::all()->first();

        $response = $this->delete(route('albums.destroy', $album->id));

        $album = $album->fresh();

        $this->assertNull($album);

        $response->assertJsonStructure([
            'message'
        ]);
    }
}
