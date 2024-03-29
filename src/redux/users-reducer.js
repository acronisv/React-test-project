import { usersAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    usersList: [
        // { id: 1, name: 'John S.', status:'I am a bitch', followed: true, location:{country: 'Westeros', city: 'Winterfell'} },
        // { id: 2, name: 'Ned S. ', status:'I am a boss', followed: true, location:{country: 'Westeros', city: 'Winterfell'} },
        // { id: 3, name: 'Daenerys T.', status:'I am a bitch', followed: false, location:{country: 'Westeros', city: 'Dragonstone'} },
        // { id: 4, name: 'Jaime L.', status:'I am a boss', followed: false, location:{country: 'Westeros', city: 'Casterly rock'} },
    ],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    fake: 1
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        // uncomment to test reselect #83
        // case "FAKE": {
        //     return {...state, fake: state.fake + 1}
        // }
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

export const followSuccess = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowSuccess = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const toggleFollowingProgress= (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
}

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(response=>{
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(response.items))
            dispatch(setTotalUsersCount(response.totalCount))
        })
    }  
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
        .then(response => {
            if (response.data.resultCode == 0) {
                dispatch(followSuccess(userId)) 
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
        .then(response => {
            if (response.data.resultCode == 0) {
                dispatch(unfollowSuccess(userId)) 
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
    
}

export default usersReducer