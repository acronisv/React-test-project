import { usersAPI } from "../api/api"

const FOLLOW = 'users-reducer/FOLLOW'
const UNFOLLOW = 'users-reducer/UNFOLLOW'
const SET_USERS = 'users-reducer/SET_USERS'
const SET_CURRENT_PAGE = 'users-reducer/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'users-reducer/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'users-reducer/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users-reducer/TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    usersList: [],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    fake: 1
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return {...state,
                usersList: state.usersList.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {...state,
                usersList: state.usersList.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {...state, usersList: action.users}
        case SET_CURRENT_PAGE:
            return{...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return{...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return{...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return{...state,
                followingInProgress: action.isFetching 
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id=>id != action.userId)] }
        default:
            return state
    }
}

export const followSuccess = (userId) => ({
        type: FOLLOW,
        userId
})

export const unfollowSuccess = (userId) => ({
        type: UNFOLLOW,
        userId
})

export const setUsers = (users) => ({
        type: SET_USERS,
        users
})

export const setCurrentPage = (currentPage) => ({
        type: SET_CURRENT_PAGE,
        currentPage
})

export const setTotalUsersCount = (totalUsersCount) => ({
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
})

export const toggleIsFetching = (isFetching) => ({
        type: TOGGLE_IS_FETCHING,
        isFetching
})

export const toggleFollowingProgress= (isFetching, userId) => ({
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
})

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
}

export const follow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await usersAPI.follow(userId)
    if (response.data.resultCode == 0) {
        dispatch(followSuccess(userId)) 
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await usersAPI.unfollow(userId)
    if (response.data.resultCode == 0) {
        dispatch(unfollowSuccess(userId)) 
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export default usersReducer