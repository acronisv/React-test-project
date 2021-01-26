const SEND_MSG = 'SEND-MESSAGE'
const UPDATE_MSG = 'UPDATE_MSG_TEXT'

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MSG
    }
}

export const updateMessageActionCreator = (text) => {
    return {
        type: UPDATE_MSG,
        text: text
    }
}
const dialogsReducer = (state, action) => {
    switch(action.type){
        case SEND_MSG:
            let newMsg = {
                id: 5,
                message: state.newMessageText
            }
            state.messagesData.push(newMsg)
            state.newMessageText=''
            return state
        case UPDATE_MSG:
            state.newMessageText = action.text
            return state
        default:
            return state
    }
}

export default dialogsReducer