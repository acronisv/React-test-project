import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../redux/posts-reducer';
import Post from './Post/Post';


const Posts = (props) => {
  let newPostElement = React.createRef()

  let newPost = () => {
    //props.addPost.addPost()
    props.dispatch(addPostActionCreator())
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    //props.addPost.updateNewPostText(text)
    props.dispatch(updateNewPostActionCreator(text))
    //debugger
    console.log(props.state.postsPage.newPostText)
  }

  let postsElements = props.state.postsPage.postsData.map(post => <Post title={post.title} text={post.text} likes={post.likesCount} />)
  return (
    <div>
      <h3>Posts</h3>
      <div><textarea ref={newPostElement} onChange={onPostChange} value={props.state.postsPage.newPostText}></textarea></div>
      <div>
        <button onClick={newPost}>Add post</button>
      </div>
      {postsElements}
    </div>
  )
}

export default Posts