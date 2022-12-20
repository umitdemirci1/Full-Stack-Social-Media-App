package com.example.QuestApp.Repos;

import com.example.QuestApp.Entities.Post;
import com.example.QuestApp.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PostRepository extends JpaRepository<Post, Long> {

    List<Post> findByUserId(Optional<User> userId);
}