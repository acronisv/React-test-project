import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, requiredField } from '../../utils/validators'
import { FormControl } from '../common/FormsControls/FormsControls'

const maxLength50 = maxLengthCreator(50)

const MessageForm = (props) => {
    console.log(props)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormControl} fieldType="textarea" name="newMessageBody" placeholder="Enter text" validate={[requiredField, maxLength50]}/>
                <button>Send message</button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({form: 'messageForm'})(MessageForm)

export default MessageReduxForm