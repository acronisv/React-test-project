import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import postsReducer from "./posts-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import profileReducer from './profile-reducer';
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { applyMiddleware } from "redux";
import { reducer as formReducer } from 'redux-form'

let reducersPack = combineReducers({
    dialogsPage: dialogsReducer,
    postsPage: postsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducersPack, applyMiddleware(thunkMiddleware))

window.store = store

export default store