import React, { useState } from 'react'
// import AllPosts from './postsSlice'
import './postsStyle.css'
import { addPost, selectPosts } from './postsSlice'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post'

function Posts() {
    const [content, setContent] = useState('');
    const [postId, setPostId] = useState(0)
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);


    function handleSubmit(e) {
        e.preventDefault();
        if (content.length === 0) {
            return;
        }

        const usernames = ['Johnjohn', 'Bacon300', 'Mynameisearl', 'onceUponATime', 'July707', 'WalkerStreet1']
        const randomNum = Math.floor(Math.random() * usernames.length)
        const randomTopic = Math.floor(Math.random() * 5)

        dispatch(
            addPost({
                id: postId,
                content: content,
                userName: usernames[randomNum],
                commentsId: postId,
                topicId: randomTopic
            })
        );

        setPostId(postId + 1);
        setContent('')
    }

    return (
        <div className='postsContainer'>
            {/* adding a new post */}
            <div className='newPostContainer'>
                <form onSubmit={handleSubmit}>
                    <input className='newPost'
                        placeholder='create a post...'
                        value={content}
                        onChange={(event) => setContent(event.currentTarget.value)} />
                </form>
            </div>

            {Object.values(posts).map(post => (
                <Post likes={post.likes} post={post.content} username={post.userName} date={post.date} />
            ))}
        </div>
    )
}

export default Posts
