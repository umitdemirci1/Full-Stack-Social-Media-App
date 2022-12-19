package com.example.QuestApp.Repos;

import com.example.QuestApp.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}