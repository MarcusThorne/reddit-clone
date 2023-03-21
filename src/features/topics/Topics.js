import React from 'react'
import './topicsStyles.css'
import { clickTopics } from '../posts/postsSlice'
import { useDispatch } from 'react-redux'

function Topics() {
    const dispatch = useDispatch();

    const topics = [
        { name: 'Home', img: '' },
        { name: 'Ask Reddit', img: '' },
        { name: 'Funny', img: '' },
        { name: 'World News', img: '' },
        { name: 'Gaming', img: '' },
        { name: 'Unexpected', img: '' },
    ]

    const postsWithTopicsId = (topicId) => {
        dispatch(
            clickTopics({
                topicsClicked: true,
                topicsId: topicId,
            })
        );
    }

    return (
        <div className='userContainer'>
            <h1>Topics</h1>
            {topics.map((topic, index) => {
                return(
                    <div key={index} className='users' onClick={postsWithTopicsId(index)}>
                        <div></div>
                        <p>{topic.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Topics
