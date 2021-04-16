import React from 'react'
import { NavLink } from 'react-router-dom'
import noImg from './../../assets/no-image.png'
import usersStyle from './Users.module.css'
import * as axios from 'axios'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let pages = []

        for (let i=1; i <= pagesCount; i++) {
            pages.push(i)
            if( i>50) {
                break
            }
        }
    return (
        
        <div>
            <div>
                {pages.map(p=>{
                    return <span onClick={(e)=>{props.onPageChanged(p)}}className={props.currentPage === p && usersStyle.selectedPage}>{p} </span>
                })}

            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            {user.followed
                                ? <button onClick={() => { 
                                    //props.unfollow(user.id) 
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "b22c94b5-30c9-4097-866c-dbf1930efb27"
                                        }
                                    }).then(response=>{
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(user.id) 
                                        }
                                    })
                                }}>Unfollow</button>
                                : <button onClick={() => { 
                                    //props.follow(user.id) 
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "b22c94b5-30c9-4097-866c-dbf1930efb27"
                                        }
                                    }).then(response=>{
                                        if (response.data.resultCode == 0) {
                                            props.follow(user.id) 
                                        }
                                    })
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
                            <NavLink to={'/profile/'+user.id}>
                                <img src={user.photos.small !=null ?user.photos.small :noImg} alt="small-img"/>
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