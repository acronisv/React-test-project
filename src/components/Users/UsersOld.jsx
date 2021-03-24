import React, { useState } from 'react'
import * as axios from 'axios'
import noImg from './../../assets/no-image.png'

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
                console.log(response.data.items)
                props.setUsers(response.data.items)
            })
    
            // props.setUsers([
            //     { id: 1, name: 'John S.', status: 'I am a bitch', followed: true, location: { country: 'Westeros', city: 'Winterfell' } },
            //     { id: 2, name: 'Ned S. ', status: 'I am a boss', followed: true, location: { country: 'Westeros', city: 'Winterfell' } },
            //     { id: 3, name: 'Daenerys T.', status: 'I am a bitch', followed: false, location: { country: 'Westeros', city: 'Dragonstone' } },
            //     { id: 4, name: 'Jaime L.', status: 'I am a boss', followed: false, location: { country: 'Westeros', city: 'Casterly rock' } },
            // ])
        }
    }

    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            {user.followed
                                ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(user.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                    </span>
                    <span>
                        <div>
                            <img src={user.photos.small !=null ?user.photos.small :noImg} alt="small-img"/>
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </span>
                    </span>
                    <br></br>
                </div>)
            }
        </div>
    )
}

export default Users