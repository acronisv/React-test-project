import React from 'react'
import { connect } from 'react-redux';
import Profile from './Profile'
import { getUserProfile } from '../../redux/profile-reducer'
import { withRouter } from 'react-router';


class ProfileComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 2
        }
        
        this.props.getUserProfile(userId)
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
const ProfileContainer = connect(mapStateToProps, {getUserProfile})(withUrlDataCointainerComponent)
export default ProfileContainer