package org.wcci.apimastery.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.wcci.apimastery.resources.Comment;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

@Entity
public class Song {
    @Id
    @GeneratedValue
    private long id;
    private String title;
    private double duration;
    @ElementCollection
    private List<Comment> comments;
    private double rating;
    @ManyToOne
    @JsonIgnore
    private Album album;



    public Song(String title, Album album, double duration, double rating, Comment...comments) {
        this.title = title;
        this.album = album;
        this.duration = duration;
        this.comments = Arrays.asList(comments);
        this.rating = rating;
    }
    public Song() {
    }
    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public double getDuration() {
        return duration;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public double getRating() {
        return rating;
    }

    public void addComment(Comment comment) {
        comments.add(comment);
    }

    public void setAlbum(Album album) {
        this.album = album;
    }

    public Album getAlbum() {
        return album;
    }
}

















