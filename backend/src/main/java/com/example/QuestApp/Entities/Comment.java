package com.example.QuestApp.Entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "comment")
@Data
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Comment_SEQ")
    @SequenceGenerator(name = "Comment_SEQ")
    @Column(name = "id", nullable = false)
    private Long id;

    private Long userId;
    private Long postId;

    @Lob
    @Column(columnDefinition = "text")
    String text;
}