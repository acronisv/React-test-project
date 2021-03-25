const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

let initialState = {
    usersList: [
        // { id: 1, name: 'John S.', status:'I am a bitch', followed: true, location:{country: 'Westeros', city: 'Winterfell'} },
        // { id: 2, name: 'Ned S. ', status:'I am a boss', followed: true, location:{country: 'Westeros', city: 'Winterfell'} },
        // { id: 3, name: 'Daenerys T.', status:'I am a bitch', followed: false, location:{country: 'Westeros', city: 'Dragonstone'} },
        // { id: 4, name: 'Jaime L.', status:'I am a boss', followed: false, location:{country: 'Westeros', city: 'Casterly rock'} },
    ],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1
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
        default:
            return state
    }
}

export const followActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUserActionCreator = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPageActionCreator = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
export const setTotalUsersCountActionCreator = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    }
}

export default usersReducer