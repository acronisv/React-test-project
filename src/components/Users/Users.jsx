import React from 'react'
import { NavLink } from 'react-router-dom'
import noImg from './../../assets/no-image.png'
import Paginator from '../common/paginator/Paginator'

let Users = (props) => {
    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged} />
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        {user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                props.unfollow(user.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                props.follow(user.id)
                            }}>Follow</button>}
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
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : noImg} alt="small-img" />
                        </NavLink>
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