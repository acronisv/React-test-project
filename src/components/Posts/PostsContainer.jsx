import { connect } from 'react-redux';
import { addPostActionCreator } from '../../redux/posts-reducer';
import Posts from './Posts';

let mapPropsToState = (state) => {
  return {
    posts: state.postsPage.postsData,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postText) => {
      dispatch(addPostActionCreator(postText))
    },
  }
}

const PostsContainer = connect(mapPropsToState, mapDispatchToProps)(Posts)

export default PostsContainer