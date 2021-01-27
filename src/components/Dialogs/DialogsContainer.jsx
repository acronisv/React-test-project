import React from 'react';
import Dialogs from './Dialogs'
import { sendMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogs-reducer'

const DialogsContainer = (props) => {
    let state = props.store.getState()

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let updateMessageText = (text) => {
        props.store.dispatch(updateMessageActionCreator(text))
        console.log(text)
    }

    //let dialogElements = props.state.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} />)
    //let messageElements = props.state.messagesData.map(message => <Message message={message.message} />)
    return (
        <Dialogs sendMessage={sendMessage} updateMessageText={updateMessageText} newMessageText={state.dialogsPage.newMessageText} dialogs={state.dialogsPage.dialogsData} messages={state.dialogsPage.messagesData}/>
    )
}

export default DialogsContainer