import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import postsReducer from "./posts-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducersPack = combineReducers({
    dialogsPage: dialogsReducer,
    postsPage: postsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer
})

let store = createStore(reducersPack)

window.store = store

export default store