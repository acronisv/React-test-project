import { Field, reduxForm } from 'redux-form'

const MessageForm = (props) => {
    console.log(props)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea"  name="newMessageBody" placeholder="Enter text"/>
                <button>Send message</button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({form: 'messageForm'})(MessageForm)

export default MessageReduxForm