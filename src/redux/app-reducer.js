import { authAPI } from './../api/api'
import { stopSubmit } from 'redux-form'
import { getAuthUserData } from './auth-reducer'

const SET_INITIALIZED = 'SET_INITIALIZED'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const setInitialized = () => {
    return {
        type: SET_INITIALIZED
    }
}

export const initializeApp = () => {
    return (
        (dispatch) => {
            let promise = dispatch(getAuthUserData())
            promise.then(()=>{dispatch(setInitialized())})
            
        })
}

export default appReducer