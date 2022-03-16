package org.wcci.apimastery.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.wcci.apimastery.entities.Song;
import org.wcci.apimastery.repos.AlbumRepository;
import org.wcci.apimastery.repos.SongRepository;

@RestController
public class SongController {

    private SongRepository songRepo;
    private AlbumRepository albumRepo;


    public SongController(SongRepository songRepo, AlbumRepository albumRepo) {
        this.songRepo = songRepo;
        this.albumRepo = albumRepo;
    }

    @GetMapping ("/songs")
    public Iterable<Song> getSongs() {
        return  songRepo.findAll();
    }

    @GetMapping ("/songs/{id}")
    public Song getSong (@PathVariable long id) {
        return songRepo.findById(id).get();
    }
}
