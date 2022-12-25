import Post from "../Post/Post"
import { useEffect, useState } from "react";
import PostForm from "../Post/Postform";

const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true)
                    setPosts(result)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }, [])

    if (error) {
        return (
            <>
                <h1>Error is occured!</h1>
                {console.log(error)}
            </>
        )
    } else if (!isLoaded) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    } else {
        return (
            <>
                <PostForm userId={"3"} userName={"A"}></PostForm>
                {posts.map((post) => (
                    <Post 
                    title={post.title} 
                    text={post.text} 
                    key={post.id} 
                    userId={post.userId}
                    userName={post.userName}></Post>
                ))}
            </>
        );
    }

}

export default Home;