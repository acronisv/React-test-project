import React from 'react'
import Preloader from '../common/preloader/preloader'
import PostsContainer from '../Posts/PostsContainer'
import ProfileStatus from '../Profile/ProfileStatus'

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <h2>Profile</h2>
            <img src={props.profile.photos.large} alt="avatar"></img>
            <p>{props.profile.fullName}</p>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

export default Profile