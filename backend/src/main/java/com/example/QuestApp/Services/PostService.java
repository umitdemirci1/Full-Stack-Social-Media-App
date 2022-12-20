package com.example.QuestApp.Services;

import com.example.QuestApp.Entities.Post;
import com.example.QuestApp.Entities.User;
import com.example.QuestApp.Repos.PostRepository;
import com.example.QuestApp.Requests.PostCreateRequest;
import com.example.QuestApp.Requests.PostUpdateRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    PostRepository postRepository;
    UserService userService;

    public PostService(PostRepository postRepository, UserService userService) {
        this.postRepository = postRepository;
        this.userService = userService;
    }

    public List<Post> getAllPosts(Optional<User> userId) {
        if (userId.isPresent()) {
            return postRepository.findByUserId(userId);
        } else {
            return postRepository.findAll();
        }
    }

    public Post savePost(PostCreateRequest newPost) {
        User user = userService.findUserById(newPost.getUserId());
        if (user == null) {
            return null;
        } else {
            Post toSave = new Post();
            toSave.setId(newPost.getId());
            toSave.setText(newPost.getText());
            toSave.setTitle(newPost.getTitle());
            toSave.setUser(user);
            return postRepository.save(toSave);
        }
    }

    public Post findPostById(Long postId) {
        return postRepository.findById(postId).orElse(null);
    }

    public Post updatePost(Long postId, PostUpdateRequest updateRequest) {
        Optional<Post> post = postRepository.findById(postId);
        if(post.isPresent()){
            Post toUpdate = post.get();
            toUpdate.setTitle(updateRequest.getTitle());
            toUpdate.setText(updateRequest.getText());
            return postRepository.save(toUpdate);
        } else return null;
    }

    public void deletePost(Long postId) {
        postRepository.deleteById(postId);
    }
}
