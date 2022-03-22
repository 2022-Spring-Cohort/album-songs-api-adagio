package org.wcci.apimastery.controllers;


import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.entities.Album;
import org.wcci.apimastery.entities.Song;
import org.wcci.apimastery.repos.AlbumRepository;
import org.wcci.apimastery.repos.SongRepository;
import org.wcci.apimastery.resources.Comment;

import java.util.Optional;

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
        Optional<Song> optionalSong = songRepo.findByTitleIgnoreCase(song.getTitle());
        if(optionalSong.isPresent()){
            if(!optionalSong.get().getAlbum().containsSong(song)) {
                optionalSong.get().setAlbum(albums);
                songRepo.save(optionalSong.get());
            }
        }
        else {
            song.setAlbum(albums);
            songRepo.save(song);
        }
        return albums;
    }

    @PostMapping ("/albums/addAlbum")
    public Album addAlbum (@RequestBody Album album) {
//        Album albums = albumRepo.findById(id).get();
        albumRepo.save(album);
        return album;
    }

    @PatchMapping ("/albums/{id}")
    public Iterable<Album> changeAlbumTitle (@PathVariable long id, @RequestBody String title)
    {
        Album album = albumRepo.findById(id).get();
        album.updateAlbumTitle(title);
        albumRepo.save(album);
        return albumRepo.findAll();
    }

    @DeleteMapping ("/albums/{id}")
    public Iterable<Album> deleteAlbum (@PathVariable long id){
        albumRepo.delete(albumRepo.findById(id).get());
        return albumRepo.findAll();
    }

    @PostMapping("/albums/{id}/addComment")
        public Album addComment(@PathVariable long id, @RequestBody Comment comment){
        Album album = albumRepo.findById(id).get();
        album.addAlbumComment(comment);
        albumRepo.save(album);
        return album;
    }

}
