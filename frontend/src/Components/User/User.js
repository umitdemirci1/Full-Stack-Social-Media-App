import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
    
    const {userId} = useParams()
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {
        
        fetch("http://localhost:8080/users")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true)
                    setUsers(result)
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
                <ul className="container">
                    {users.map((user) => (
                        <li key={user.id} className="rounded bg-blue-400 hover:bg-red-400 transition-colors">
                            {console.log(user)}
                            {user.userName}
                            {user.password}
                        </li>
                    ))}
                </ul>

                <h3>{userId}</h3>
            </>
        );
    }
}
 
export default User;