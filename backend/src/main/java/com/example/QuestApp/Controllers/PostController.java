package com.example.QuestApp.Controllers;

import com.example.QuestApp.Entities.Post;
import com.example.QuestApp.Entities.User;
import com.example.QuestApp.Requests.PostCreateRequest;
import com.example.QuestApp.Requests.PostUpdateRequest;
import com.example.QuestApp.Services.PostService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/posts")
public class PostController {

    private PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public List<Post> getAllPosts(@RequestParam Optional<User> userId){
        return postService.getAllPosts(userId);
    }

    @GetMapping("/{postId}")
    public Post getOnePost(@PathVariable Long postId){
        return postService.findPostById(postId);
    }

    @PostMapping
    public Post savePost(@RequestBody PostCreateRequest newPost){
        return postService.savePost(newPost);
    }

    @PutMapping("/{postId}")
    public Post updatePost(@PathVariable Long postId, @RequestBody PostUpdateRequest updateRequest){
        return postService.updatePost(postId, updateRequest);
    }

    @DeleteMapping("/{postId}")
    public void deletePost(@PathVariable Long postId){
        postService.deletePost(postId);
    }
}
