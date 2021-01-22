import React from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message'
import Dialog from './Dialog/Dialog'

let newMessage = React.createRef();

let sendMessage = () => {
    let text = newMessage.current.value
    alert(text)
}

const Dialogs = (props) => {
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
                <textarea ref={newMessage} name="" id="" cols="30" rows="10"></textarea>
                <button onClick = {sendMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs