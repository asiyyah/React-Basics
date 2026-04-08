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

const [comments, setComments] = useState([])
useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then((data) => {
        setComments(data)
    })
}, [])

const [users, setUsers] = useState([])
useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then((data) => {
        setUsers(data)
    })
}, [])

    return (
        <div className="feed-container">
            <h1>Feed</h1>
            {posts.map(post => {
                const user = users.find(u => u.id === post.userId);
                const postComments = comments.filter(c => c.postId === post.id);

                return (
                    <div key={post.id} className="post-card">
                        <div className="post-user-info">
                            <strong>User: </strong> {user ? user.name : 'Loading...'}
                        </div>
                        
                        <h2 className="post-title">{post.title}</h2>
                        <p className="post-body">{post.body}</p>
                        
                        <div className="post-comments-container">
                            <h4 className="post-comments-title">Comments ({postComments.length})</h4>
                            {postComments.map(comment => (
                                <div key={comment.id} className="post-comment">
                                    <strong className="post-comment-author">{comment.name} ({comment.email})</strong>
                                    <p className="post-comment-body">{comment.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default Posts