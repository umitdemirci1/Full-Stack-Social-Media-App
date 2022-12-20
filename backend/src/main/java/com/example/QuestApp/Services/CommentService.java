package com.example.QuestApp.Services;

import com.example.QuestApp.Entities.Comment;
import com.example.QuestApp.Entities.Post;
import com.example.QuestApp.Entities.User;
import com.example.QuestApp.Repos.CommentRepository;
import com.example.QuestApp.Requests.CommentCreateRequest;
import com.example.QuestApp.Requests.CommentUpdateRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {

    private CommentRepository commentRepository;
    private UserService userService;
    private PostService postService;

    public CommentService(CommentRepository commentRepository, UserService userService, PostService postService) {
        this.commentRepository = commentRepository;
        this.userService = userService;
        this.postService = postService;
    }

    public List<Comment> getComments(Optional<Long> userId, Optional<Long> postId) {
        if(userId.isPresent() && postId.isPresent()){
            return commentRepository.findByUserIdAndPostId(userId, postId);
        } else if( userId.isPresent()) {
            return commentRepository.findByUserId(userId);
        } else if(postId.isPresent()) {
            return commentRepository.findByPostId(postId);
        } else return commentRepository.findAll();
    }

    public Comment getComment(Long commentId) {
        return commentRepository.findById(commentId).orElse(null);
    }

    public Comment saveComment(CommentCreateRequest newComment) {
        User user = userService.findUserById(newComment.getUserId());
        Post post = postService.findPostById(newComment.getPostId());

        if(user == null || post == null) {
            return null;
        } else {
            Comment toSave = new Comment();
            toSave.setId(newComment.getId());
            toSave.setText(newComment.getText());
            toSave.setUser(user);
            toSave.setPost(post);
            return commentRepository.save(toSave);
        }
    }

    public Comment updateComment(Long commentId, CommentUpdateRequest updateComment) {
        Optional<Comment> comment = commentRepository.findById(commentId);
        if(comment.isPresent()){
            Comment toUpdate = comment.get();
            toUpdate.setText(updateComment.getText());
            return commentRepository.save(toUpdate);
        } else return null;
    }

    public void deleteComment(Long commentId) {
        commentRepository.deleteById(commentId);
    }
}
