import React from 'react'
import Preloader from '../common/preloader/preloader'

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <h2>Profile</h2>
            <img src={props.profile.photos.large} alt="avatar"></img>
            <p>{props.profile.fullName}</p>
        </div>
    )
}

export default Profile