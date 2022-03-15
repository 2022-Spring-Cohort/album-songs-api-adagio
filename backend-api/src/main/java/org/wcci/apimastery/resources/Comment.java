package org.wcci.apimastery.resources;


import javax.persistence.*;

@Embeddable
public class Comment {

    @Id
    @GeneratedValue
    private Long id;
    private String author;
    @Lob
    private String comment;



    public Comment(String author, String comment) {
        this.author = author;
        this.comment = comment;
    }

    public Comment() {

    }

    public Long getId() {
        return id;
    }

    public String getAuthor() {
        return author;
    }

    public String getComment() {
        return comment;
    }
}

