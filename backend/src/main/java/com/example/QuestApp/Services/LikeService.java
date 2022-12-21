package com.example.QuestApp.Services;

import com.example.QuestApp.Entities.Like;
import com.example.QuestApp.Entities.Post;
import com.example.QuestApp.Entities.User;
import com.example.QuestApp.Repos.LikeRepository;
import com.example.QuestApp.Requests.LikeCreateRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LikeService {

    private LikeRepository likeRepository;
    private UserService userService;
    private PostService postService;

    public LikeService(LikeRepository likeRepository, UserService userService, PostService postService) {
        this.likeRepository = likeRepository;
        this.userService = userService;
        this.postService = postService;
    }

    public List<Like> getLikes(Optional<Long> userId, Optional<Long> postId) {
        if (userId.isPresent() && postId.isPresent()) {
            return likeRepository.findByUserIdAndPostId(userId, postId);
        } else if (userId.isPresent()) {
            return likeRepository.findByUserId(userId);
        } else if(postId.isPresent()) {
            return likeRepository.findByPostId(postId);
        } else return null;
    }

    public Like getLike(Long likeId){
        return likeRepository.findById(likeId).orElse(null);
    }

    public Like saveLike(LikeCreateRequest newLike) {
        User user = userService.findUserById(newLike.getUserId());
        Post post = postService.findPostById(newLike.getPostId());

        if(user == null || post == null) {
            return null;
        } else {
            Like toSave = new Like();
            toSave.setUser(user);
            toSave.setPost(post);
            toSave.setId(newLike.getId());
            return likeRepository.save(toSave);
        }
    }

    public void deleteLike(Long likeId) {
        likeRepository.deleteById(likeId);
    }
}
