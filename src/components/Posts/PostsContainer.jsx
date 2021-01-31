import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostActionCreator } from '../../redux/posts-reducer';
import Posts from './Posts';

// const PostsContainer = (props) => {

//   let state = props.store.getState()
//   console.log(state.postsPage.newPostText)
  
//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator())
//   }

//   let postChange = (text) => {
//     let action = updateNewPostActionCreator(text)
//     props.store.dispatch(action)

//   }

//   return (
//     <Posts updateNewPostText={postChange} addPost={addPost} posts={state.postsPage.postsData} newPostText={state.postsPage.newPostText}/>
//   )
// }

let mapPropsToState = (state) => {
  return {
    posts: state.postsPage.postsData,
    newPostText: state.postsPage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostActionCreator(text))
    }
  }
}

const PostsContainer = connect(mapPropsToState, mapDispatchToProps)(Posts)

export default PostsContainer