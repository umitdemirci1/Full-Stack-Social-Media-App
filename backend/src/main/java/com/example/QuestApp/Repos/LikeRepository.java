package com.example.QuestApp.Repos;

import com.example.QuestApp.Entities.Like;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikeRepository extends JpaRepository<Like, Long> {
}