const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
    usersList: [
        { id: 1, fullName: 'John S.', status:'I am a bitch', followed: true, location:{country: 'Westeros', city: 'Winterfell'} },
        { id: 2, fullName: 'Ned S. ', status:'I am a boss', followed: true, location:{country: 'Westeros', city: 'Winterfell'} },
        { id: 3, fullName: 'Daenerys T.', status:'I am a bitch', followed: false, location:{country: 'Westeros', city: 'Dragonstone'} },
        { id: 4, fullName: 'Jaime L.', status:'I am a boss', followed: false, location:{country: 'Westeros', city: 'Casterly rock'} },
    ]
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
            return {...state, usersList: [...state.usersList, ...action.users]}
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

export default usersReducer