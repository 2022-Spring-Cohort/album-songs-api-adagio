package org.wcci.apimastery.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.wcci.apimastery.resources.Comment;

import javax.persistence.*;
import java.util.Arrays;
import java.util.List;

@Entity
public class Song {
    @Id
    @GeneratedValue
    private long id;
    private String title;
    private int duration;
    private double averageSongRating;

    @ElementCollection
    private List<Comment> comments;
    @ManyToOne
    @JsonIgnore
    private Album album;



    public Song(String title, Album album, int duration, Comment...comments) {
        this.title = title;
        this.album = album;
        this.duration = duration;
        this.comments = Arrays.asList(comments);
        this.averageSongRating = 0;
    }
    public Song() {
    }
    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public int getDuration() {
        return duration;
    }

    public List<Comment> getComments() {
        return comments;
    }


    public void addSongComment(Comment comment) {
        comments.add(comment);
        averageSongRating = 0;
        for (Comment tempcomment : comments){
            averageSongRating += tempcomment.getRating();
        }
        averageSongRating /= comments.size();
    }

    public void setAlbum(Album album) {
        this.album = album;
    }

    public Album getAlbum() {
        return album;
    }

    public void updateSongTitle(String newSongTitle) { title = newSongTitle;}

    public double getAverageSongRating() {
        return averageSongRating;
    }
}

















