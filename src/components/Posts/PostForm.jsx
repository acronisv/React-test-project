import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { requiredField, maxLengthCreator } from '../../utils/validators'
import { FormControl } from '../common/FormsControls/FormsControls'

const maxLength10 = maxLengthCreator(10)

const PostForm = (props) => {
    console.log(props)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="postText" component={FormControl} fieldType="textarea" placeholder="Post message" type="text" validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({form:'post'})(PostForm)
export default PostReduxForm