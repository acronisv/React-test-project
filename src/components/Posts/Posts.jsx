import React from 'react';
import Post from './Post/Post';


const Posts = (props) => {

  let newPostElement = React.createRef()
  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)

  }

  let postsElements = props.posts.map(post => <Post title={post.title} text={post.text} likes={post.likesCount} />)
  return (
    <div>
      <h3>Posts</h3>
      <div><textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea></div>
      <div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      {postsElements}
    </div>
  )
}

export default Posts