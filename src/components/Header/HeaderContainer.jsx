import React from 'react';
import Header from './Header';
import { connect } from 'react-redux'
import { getAuthUserData, getSignOut } from '../../redux/auth-reducer'

class HeaderComponent extends React.Component {

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

const HeaderContainer = connect(mapStateToProps, { getAuthUserData, getSignOut })(HeaderComponent)
export default HeaderContainer