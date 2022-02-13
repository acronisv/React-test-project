import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import dialogsReducer from "./dialogs-reducer";
import postsReducer from "./posts-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import profileReducer from './profile-reducer';
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let reducersPack = combineReducers({
    dialogsPage: dialogsReducer,
    postsPage: postsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducersPack, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ))

//let store = createStore(reducersPack, applyMiddleware(thunkMiddleware))

window.__store__ = store

export default store