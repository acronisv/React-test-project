import React from 'react'
import noImg from './../../assets/no-image.png'
import usersStyle from './Users.module.css'

let Users = (props) => {
    console.log(props.totalUsersCount)
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