import { profileAPI, usersAPI } from './../api/api'

const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'


let initialState = {
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

export const setUserProfile = (profile) => {
    return{type: SET_USER_PROFILE, profile}
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const getStatus = (userId) => {
    return (
        (dispatch) => {
            profileAPI.getStatus(userId).then(data=>{
                dispatch(setStatus(data))
            })
        }
    )
}

export const updateStatus = (userId) => {
    return (
        (dispatch) => {
            profileAPI.updateStatus(userId).then(data=>{
                if (data.resultCode === 0) {
                    console.log(data.resultCode)
                    dispatch(setStatus(data))
                }
            })
        }
    )
}

export const getUserProfile = (userId) => {
    return (
        (dispatch) => {
            profileAPI.getProfile(userId).then(data=>{
                dispatch(setUserProfile(data))
            })
        }
    )
}

export default profileReducer