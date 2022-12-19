package com.example.QuestApp.Repos;

import com.example.QuestApp.Entities.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}