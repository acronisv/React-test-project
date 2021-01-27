const SEND_MSG = 'SEND-MESSAGE'
const UPDATE_MSG = 'UPDATE_MSG_TEXT'

let initialState = {
    messagesData: [
        { id: 1, message: 'text1' },
        { id: 2, message: 'text2' },
        { id: 3, message: 'text3' },
        { id: 4, message: 'text4' }
    ],
    newMessageText: 'default text',
    dialogsData: [
        { id: 1, name: 'person1' },
        { id: 2, name: 'person2' },
        { id: 3, name: 'person3' },
        { id: 4, name: 'person4' }
    ]
}

const dialogsReducer = (state = initialState, action) => {
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
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MSG
    }
}

export const updateMessageActionCreator = (text) => {
    return {
        type: UPDATE_MSG,
        newText: text
    }
}

export default dialogsReducer