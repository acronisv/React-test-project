import React from 'react'
import { connect } from 'react-redux';
import * as axios from 'axios'
import Profile from './Profile'
import {setUserProfile} from '../../redux/profile-reducer'

class ProfileComponent extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then(response=>{
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileComponent)
export default ProfileContainer