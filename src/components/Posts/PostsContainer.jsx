import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../redux/posts-reducer';
import Posts from './Posts';

const PostsContainer = (props) => {

  let state = props.store.getState()
  console.log(state.postsPage.newPostText)
  
  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  let postChange = (text) => {
    let action = updateNewPostActionCreator(text)
    props.store.dispatch(action)

  }

  return (
    <Posts updateNewPostText={postChange} addPost={addPost} posts={state.postsPage.postsData} newPostText={state.postsPage.newPostText}/>
  )
}

export default PostsContainer