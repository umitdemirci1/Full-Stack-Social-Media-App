import { useEffect, useState } from "react";

const Post = () => {
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
                <h2>Error code:</h2>
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
                <ul className="container">
                    {posts.map((post, index) => (
                        <li key={index} className="rounded bg-blue-400 hover:bg-red-400 transition-colors">
                            {console.log(post)}
                            {post.id}
                            {post.text}
                            {post.title}
                        </li>
                    ))}
                </ul>
            </>
        );
    }

}

export default Post;