import React from 'react'
import Preloader from '../common/preloader/preloader'
import PostsContainer from '../Posts/PostsContainer'
import ProfileStatus from '../Profile/ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const Profile = (props) => {
    console.log("profile render")
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <h2>Profile</h2>
            <img src={props.profile.photos.large} alt="avatar"></img>
            <p>{props.profile.fullName}</p>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

export default Profile