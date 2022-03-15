package org.wcci.apimastery.controllers;


import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.entities.Album;
import org.wcci.apimastery.entities.Song;
import org.wcci.apimastery.repos.AlbumRepository;
import org.wcci.apimastery.repos.SongRepository;

@RestController
public class AlbumController {

    private AlbumRepository albumRepo;
    private SongRepository songRepo;

    public AlbumController (AlbumRepository albumRepo, SongRepository songRepo) {
        this.albumRepo = albumRepo;
        this.songRepo = songRepo;
    }

    @GetMapping("/albums")
    public Iterable<Album> getAlbums() {
        return albumRepo.findAll();
    }

    @GetMapping ("/albums/{id}")
    public Album getAlbums (@PathVariable long id) {
        return albumRepo.findById(id).get();
    }

    @PostMapping ("/albums/{id}/addSong")
    public Album addSongToAlbum (@PathVariable long id, @RequestBody Song song) {
        Album albums = albumRepo.findById(id).get();
        song.setAlbum(albums);
        songRepo.save(song);
        return albums;
    }

}
