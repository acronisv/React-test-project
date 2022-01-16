import React from 'react'
import { connect } from 'react-redux';
import Profile from './Profile'
import {setUserProfile} from '../../redux/profile-reducer'
import { withRouter } from 'react-router';
import { UsersApi } from '../../api/api';

class ProfileComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 2
        }
        
        UsersApi.getProfile(userId).then(data=>{
            console.log(data)
                this.props.setUserProfile(data)
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

let withUrlDataCointainerComponent= withRouter(ProfileComponent)
const ProfileContainer = connect(mapStateToProps, {setUserProfile})(withUrlDataCointainerComponent)
export default ProfileContainer