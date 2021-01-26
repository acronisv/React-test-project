const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'UPDATE-NEW-POST-TEXT'

export const addPostActionCreator = () => {
    return {
      type: ADD_POST
    }
  }
  
export const updateNewPostActionCreator = (text) => {
    return {
      type: UPDATE_POST,
      newText: text
    }
  }

const postsReducer = (state, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                title: 'New title',
                text: state.newPostText,
                likesCount: 5
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_POST:
            state.newPostText = action.newText
            return state
        default: 
            return state
    }
}

export default postsReducer