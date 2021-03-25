import React, { useState } from 'react'
import * as axios from 'axios'
import noImg from './../../assets/no-image.png'
import usersStyle from './Users.module.css'

class Users extends React.Component {
    componentDidMount() {
        console.log('done request')
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=>{
            console.log(response.data.items)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response=>{
            console.log(response.data.items)
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
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
                        return <span onClick={(e)=>{this.onPageChanged(p)}}className={this.props.currentPage === p && usersStyle.selectedPage}>{p} </span>
                    })}

                </div>
                {
                    this.props.users.map(user => <div key={user.id}>
                        <span>
                            <div>
                                {user.followed
                                    ? <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>
                                    : <button onClick={() => { this.props.follow(user.id) }}>Follow</button>}
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
}

export default Users