import React from 'react';
import Post from './Post/Post';
import PostReduxForm from './PostForm';


const Posts = (props) => {
  console.log("posts render")
  let onAddPost = (values) => {
    props.addPost(values.postText)
  }

  let postsElements = props.posts.map(post => <Post title={post.title} key={post.id} text={post.text} likes={post.likesCount} />)
  return (
    <div>
      <h3>Posts</h3>
      <PostReduxForm onSubmit={onAddPost}/>
      {postsElements}
    </div>
  )
}

export default Posts