import React from 'react';
import Header from './Header';
import * as axios from 'axios'
import { getAuth } from '../../api/api';
import { connect } from 'react-redux'
import { setAuthUserData } from '../../redux/auth-reducer'

class HeaderComponent extends React.Component {
    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
        //     withCredentials: true
        // }).then(response=>{
        //     if(response.data.resultCode === 0) {
        //         let {id, login, email} = response.data.data
        //         this.props.setAuthUserData(id, email, login)
        //     }
        // })
        getAuth().then(data=>{
            if(data.resultCode === 0) {
                let {id, login, email} = data.data
                this.props.setAuthUserData(id, email, login)
            }
        })
    }
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderComponent)
export default HeaderContainer