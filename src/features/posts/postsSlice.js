import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        topicsClicked: false,
        topicsId: undefined,
        posts: {},
    },
    reducers: {
        addPost: (state, action) => {
            const { id, content, userName, commentsId, topicId } = action.payload;
            state.posts[id] = {
                id: id,
                likes: 0,
                content: content,
                userName: userName,
                date: Date.now(),
                commentsId: commentsId,
                topicId: topicId
            }
        },
        clickTopics: (state, action) => {
            state.topicsClicked = true;
            state.topicsId = action.payload.topicId;
        }
    }
})

// const whatPostsToSelect = (state) => {
//     const posts = state.posts.posts
//     let showPosts = {}

//     if(state.posts.topicsClicked) {
//         for(let i = 0; i < posts.length; i++){
//             showPosts.push(posts[i].topicId === state.posts.posts.topicId)
//         }
//     } else {
//         showPosts = posts
//     }

//     return showPosts;
// }

export const selectPosts = (state) => state.posts.posts
export const { addPost, clickTopics } = postsSlice.actions;
export default postsSlice.reducer;
