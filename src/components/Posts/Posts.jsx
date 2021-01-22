import React from 'react';
import Post from './Post/Post';

const Posts = (props) => {

  let newPostElement = React.createRef()

  let newPost = () => {
    let text = newPostElement.current.value
    props.addPost(text)
  }

  let postsElements = props.state.postsData.map(post => <Post title = {post.title} text = {post.text} likes = {post.likesCount}/>)
  return (
    <div>
      <h3>Posts</h3>
      <div><textarea ref={newPostElement}></textarea></div>
      <div>
        <button onClick={newPost}>Add post</button>
      </div>
      {postsElements}
    </div>
  )
}

export default Posts