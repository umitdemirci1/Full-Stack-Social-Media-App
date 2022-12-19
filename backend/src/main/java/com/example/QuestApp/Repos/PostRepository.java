package com.example.QuestApp.Repos;

import com.example.QuestApp.Entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}