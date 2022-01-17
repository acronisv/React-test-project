import React from 'react'
import { connect } from 'react-redux';
import Profile from './Profile'
import { getUserProfile } from '../../redux/profile-reducer'
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import {withAuthRedirect} from './../../hoc/withAuthRedirect'
import { compose } from 'redux';


class ProfileContainer extends React.Component {
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
    profile: state.profilePage.profile,
})

//Было
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// let withUrlDataCointainerComponent= withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, {getUserProfile})(withUrlDataCointainerComponent)

//Стало с compose
export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)