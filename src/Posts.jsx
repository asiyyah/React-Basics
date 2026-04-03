import React, {useEffect, useState} from "react"

function Posts(){
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then((data) => {
            setPosts(data)
        })
    }, [])

console.log(posts)

    return(
        <>
        <h1>Posts</h1>
        <ul>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>  
                </div>
                ))}
        </ul>
        </>
    )
}
export default Posts