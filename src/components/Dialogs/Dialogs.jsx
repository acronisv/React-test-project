import React from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message'
import Dialog from './Dialog/Dialog'
import { Redirect } from 'react-router-dom';
import MessageReduxForm from './MessageForm';

const Dialogs = (props) => {
    
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
        
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
            <MessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}

export default Dialogs