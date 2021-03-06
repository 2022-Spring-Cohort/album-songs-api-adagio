package org.wcci.apimastery.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.entities.Album;
import org.wcci.apimastery.entities.Song;
import org.wcci.apimastery.repos.AlbumRepository;
import org.wcci.apimastery.repos.SongRepository;
import org.wcci.apimastery.resources.Comment;

@RestController
public class SongController {

    private SongRepository songRepo;
    private AlbumRepository albumRepo;


    public SongController(SongRepository songRepo, AlbumRepository albumRepo) {
        this.songRepo = songRepo;
        this.albumRepo = albumRepo;
    }

    @GetMapping("/songs")
    public Iterable<Song> getSongs() {
        return songRepo.findAll();
    }

    @GetMapping("/songs/{id}")
    public Song getSong(@PathVariable long id) {
        return songRepo.findById(id).get();
    }


    @DeleteMapping("/songs/{id}")
    public Album deleteSong(@PathVariable long id){
        Song song = songRepo.findById(id).get();
        songRepo.delete(song);
        return albumRepo.findById(song.getAlbum().getId()).get();
    }

    @PatchMapping ("/albums/songs/{id}")
    public Iterable<Album> updateSongTitle (@PathVariable long id, @RequestBody String title)
    {
        Song song = songRepo.findById(id).get();
        song.updateSongTitle(title);
        songRepo.save(song);
        return albumRepo.findAll();
    }


    @PostMapping("/albums/songs/{id}/addComment")
    public Song addComment(@PathVariable long id, @RequestBody Comment comment){
        Song song = songRepo.findById(id).get();
        song.addSongComment(comment);
        songRepo.save(song);
        return song;
    }
}