package com.example.QuestApp.Entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "like")
@Data
public class Like {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Like_SEQ")
    @SequenceGenerator(name = "Like_SEQ")
    @Column(name = "id", nullable = false)
    private Long id;

    private Long userId;
    private Long postId;
}