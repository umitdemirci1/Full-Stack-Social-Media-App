package com.example.QuestApp.Requests;

import lombok.Data;

@Data
public class PostCreateRequest {

    private Long id;
    private Long userId;
    private String title;
    private String text;
}
