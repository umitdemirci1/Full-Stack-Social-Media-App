package com.example.QuestApp.Entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "post")
@Data
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Post_SEQ")
    @SequenceGenerator(name = "Post_SEQ")
    @Column(name = "id", nullable = false)
    private Long id;

    private Long userId;
    private String title;
    @Lob
    @Column(columnDefinition = "text")
    private String text;

}