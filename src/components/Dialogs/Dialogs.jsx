import React from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message'
import Dialog from './Dialog/Dialog'
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {

    let newMessage = React.createRef();
    let onSendMessage = () => {
        props.sendMessage()
    }

    let onUpdateMessageText = () => {
       let text = newMessage.current.value
       props.updateMessageText(text)
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>

    let dialogElements = props.dialogsPage.dialogsData.map(dialog => <Dialog name={dialog.name} key={dialog.id} id={dialog.id} />)
    let messageElements = props.dialogsPage.messagesData.map(message => <Message message={message.message} key={message.id} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__list}>
                {dialogElements}
            </div>
            <div className={s.message__list}>
                {messageElements}
            </div>
            <div>
                <textarea ref={newMessage} name="" id="" cols="30" rows="10" onChange={onUpdateMessageText} value={props.newMessageText}></textarea>
                <button onClick={onSendMessage} >Send message</button>
            </div>
        </div>
    )
}

export default Dialogs