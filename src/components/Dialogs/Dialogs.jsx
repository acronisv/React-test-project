import React from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message'
import Dialog from './Dialog/Dialog'
import { sendMessageActionCreator, updateMessageActionCreator } from './../../redux/dialogs-reducer'

const Dialogs = (props) => {
    let newMessage = React.createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    let updateMessageText = () => {
        let text = newMessage.current.value
        //props.state.newMessageText = text
        props.dispatch(updateMessageActionCreator(text))

        console.log(props.state.newMessageText)
    }

    let dialogElements = props.state.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} />)
    let messageElements = props.state.messagesData.map(message => <Message message={message.message} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__list}>
                {dialogElements}
            </div>
            <div className={s.message__list}>
                {messageElements}
            </div>
            <div>
                <textarea ref={newMessage} name="" id="" cols="30" rows="10" onChange={updateMessageText} value={props.state.newMessageText}></textarea>
                <button onClick={sendMessage} >Send message</button>
            </div>
        </div>
    )
}

export default Dialogs