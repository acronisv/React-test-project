import { authAPI } from './../api/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    }
}

export const getAuthUserData = () => {
    return (
        (dispatch) => {
            authAPI.me().then(response=>{
                if(response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
        }
    )
}

export const getSignIn = (formData) => {
    return(
        (dispatch) => {
            authAPI.signIn(formData.login, formData.password, formData.rememberMe).then(response=>{
                console.log('Sign in', response.data.resultCode)
                if(response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Login failed"
                    dispatch(stopSubmit('login', {_error: message})) //Форма логин, поле логин
                }
            })
        }
    )
}

export const getSignOut = () => {
    return(
        (dispatch) => {
            authAPI.signOut().then(response=>{
                console.log('Sign out', response.data.resultCode)
                if(response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null,null,null,false))
                }
            })
        }
    )
}


export default authReducer