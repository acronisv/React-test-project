import { authAPI } from './../api/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'auth-reducer/SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
        type: SET_USER_DATA,
        payload: { userId, email, login, isAuth }
})

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}
    
export const getSignIn = (formData) => async (dispatch) => {
    let response = await authAPI.signIn(formData.login, formData.password, formData.rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Login failed"
        dispatch(stopSubmit('login', { _error: message })) //Форма логин, поле логин
    }
}
    
export const getSignOut = () => async (dispatch) => {
    let response = await authAPI.signOut()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer