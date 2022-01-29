const SEND_MSG = 'SEND-MESSAGE'

let initialState = {
    messagesData: [
        { id: 1, message: 'text1' },
        { id: 2, message: 'text2' },
        { id: 3, message: 'text3' },
        { id: 4, message: 'text4' }
    ],
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
                message: action.newMessageText
            }
            return {...state,
                messagesData: [...state.messagesData, newMsg]
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = (newMessageText) => {
    return {
        type: SEND_MSG,
        newMessageText
    }
}

export default dialogsReducer