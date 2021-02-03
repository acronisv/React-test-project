import React, { useState } from 'react'

const Users = (props) => {
    if (props.users.length === 0){
        props.setUsers( [
            { id: 1, fullName: 'John S.', status:'I am a bitch', followed: true, location:{country: 'Westeros', city: 'Winterfell'} },
            { id: 2, fullName: 'Ned S. ', status:'I am a boss', followed: true, location:{country: 'Westeros', city: 'Winterfell'} },
            { id: 3, fullName: 'Daenerys T.', status:'I am a bitch', followed: false, location:{country: 'Westeros', city: 'Dragonstone'} },
            { id: 4, fullName: 'Jaime L.', status:'I am a boss', followed: false, location:{country: 'Westeros', city: 'Casterly rock'} },
        ])
    }
    
    return (
        <div>
{            props.users.map( user => <div key={user.id}>
                <span>
                    <div>
                        
                    </div>
                    <div>
                        { user.followed 
                        ? <button onClick={()=> {props.unfollow(user.id)}}>Unfollow</button> 
                        : <button onClick={()=> {props.follow(user.id)}}>Follow</button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                </span>
                <span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>)
        }
        </div>
    )
}

export default Users