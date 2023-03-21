import React from 'react'
import './postStyles.css'

function Post({
    likes,
    post,
    username,
    date
}) {

    const newDate = (date) => {
        const timeAllapsed = Date.now() - date;
        let timeToDisplay;

        if((timeAllapsed / 60000) < 1) {
            timeToDisplay = 'Just now'
        } else if ((timeAllapsed / 60000) < 60) {
            timeToDisplay = `${Math.round(timeAllapsed / 60000)} minutes ago`
        } else if ((timeAllapsed / 60000) >= 60) {
            timeToDisplay = `${Math.round(timeAllapsed / 3600000)} hours ago`
        }

        return timeToDisplay;
    }

    return (
    <div className='postContainer'>
        <div className='likesContainer'>
            <p className='likes'>{likes}</p>
        </div>

        <div className='postContent'>
            <p className='post'>{post}</p>
            <div>
                <p className='username'>{username}</p>
                <p className='date'>{newDate(date)}</p>
                <p className='comments'>Comments</p>
            </div>
        </div>
    </div>
  )
}

export default Post
