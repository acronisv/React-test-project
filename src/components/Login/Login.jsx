import React from "react";
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"login"} placeholder={"login"} component={"input"} type={"text"} />
            </div>
            <div>
                <Field name={"password"} placeholder={"password"} component={"input"} type={"text"} />
            </div>
            <div>
                <Field name={"rememberMe"} component={"input"} type={"checkbox"} />
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
        
    )
}

export default Login