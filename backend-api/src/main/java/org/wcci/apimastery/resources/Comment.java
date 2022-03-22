package org.wcci.apimastery.resources;


import javax.persistence.*;

@Embeddable
public class Comment {

//    @Id
//    @GeneratedValue
//    private Long id;
    private String author;
    @Lob
    private String comment;
    private double rating;



    public Comment(String author, String comment, double rating) {
        this.author = author;
        this.comment = comment;
        this.rating = 5;
    }

    public Comment() {

    }

//    public Long getId() {
//        return id;
//    }

    public String getAuthor() {
        return author;
    }

    public String getComment() {
        return comment;
    }

    public double getRating() {
        return rating;
    }
}

