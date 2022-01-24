import React from "react";
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, requiredField } from "../../utils/validators";
import { FormControl } from "../common/FormsControls/FormsControls";
import { getSignIn, getSignOut } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";

const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"login"} placeholder={"login"} component={FormControl} type={"text"} validate={[requiredField, maxLength20]}/>
            </div>
            <div>
                <Field name={"password"} placeholder={"password"} component={FormControl} type={"password"} validate={[requiredField, maxLength20]}/>
            </div>
            <div>
                <Field name={"rememberMe"} component={FormControl} type={"checkbox"} />
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
        props.getSignIn(formData)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
        
    )
}

const mapStateToProps = (state)=>(
    {isAuth: state.auth.isAuth}
)

export default connect(mapStateToProps, {getSignIn, getSignOut})(Login)