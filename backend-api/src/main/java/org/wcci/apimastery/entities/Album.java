package org.wcci.apimastery.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.wcci.apimastery.resources.Comment;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;


@Entity
public class Album {
    @Id
    @GeneratedValue
    private long id;
    private String title;
    private String artist;
    private String imgUrl;


    @OneToMany (mappedBy ="album", cascade = CascadeType.ALL, orphanRemoval = true)
    private Collection<Song> songs;




    private String recordLabel;
    @ElementCollection
    private List<Comment> comments;
//    @ElementCollection
//    private List<Double> ratings;
private double rating;

    public Album(String title, String artist, String imgUrl, String recordLabel, double rating, Comment...comments) {
        this.title = title;
        this.artist = artist;
        this.imgUrl = imgUrl;

        this.recordLabel = recordLabel;
        this.comments = Arrays.asList(comments);
        this.rating = rating;
    }
    public Album() {

    }

//    public void addRating(double rating) {
//        this.ratings.add(rating);
//    }


    public long getId() {
        return id;
    }

    public String getArtist() {
        return artist;
    }

    public String getTitle() {
        return title;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public Collection<Song> getSongs() {
        return songs;
    }

    public String getRecordLabel() {
        return recordLabel;
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

    public void updateAlbumTitle(String newAlbumTitle) { title = newAlbumTitle;}

}