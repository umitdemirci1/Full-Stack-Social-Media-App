package com.example.QuestApp.Controllers;

import com.example.QuestApp.Entities.Like;
import com.example.QuestApp.Requests.LikeCreateRequest;
import com.example.QuestApp.Services.LikeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/likes")
public class LikeController {

    private LikeService likeService;

    public LikeController(LikeService likeService) {
        this.likeService = likeService;
    }

    @GetMapping
    public List<Like> getLikes(@RequestParam Optional<Long> userId, @RequestParam Optional<Long> postId){
        return likeService.getLikes(userId, postId);
    }

    @GetMapping("/{likeId}")
    public Like getLike(@PathVariable Long likeId){
        return likeService.getLike(likeId);
    }

    @PostMapping
    public Like saveLike(@RequestBody LikeCreateRequest newLike){
        return likeService.saveLike(newLike);
    }

    @DeleteMapping("/{likeId}")
    public void deleteLike(@PathVariable Long likeId){
        likeService.deleteLike(likeId);
    }
}
