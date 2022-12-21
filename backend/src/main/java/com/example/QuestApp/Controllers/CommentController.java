package com.example.QuestApp.Controllers;


import com.example.QuestApp.Entities.Comment;
import com.example.QuestApp.Requests.CommentCreateRequest;
import com.example.QuestApp.Requests.CommentUpdateRequest;
import com.example.QuestApp.Services.CommentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/comments")
public class CommentController {

    private CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping
    public List<Comment> getAllComments(@RequestParam Optional<Long> userId, @RequestParam Optional<Long> postId) {
        return commentService.getComments(userId, postId);
    }

    @GetMapping("/{commentId}")
    public Comment getComment(@PathVariable Long commentId){
        return commentService.getComment(commentId);
    }

    @PostMapping
    public Comment createComment(@RequestBody CommentCreateRequest newComment){
        return commentService.saveComment(newComment);
    }

    @PutMapping("/{commentId}")
    public Comment updateComment(@PathVariable Long commentId, @RequestBody CommentUpdateRequest updateComment){
        return commentService.updateComment(commentId, updateComment);
    }

    @DeleteMapping("/{commentId}")
    public void deleteComment(@PathVariable Long commentId){
        commentService.deleteComment(commentId);
    }
}
