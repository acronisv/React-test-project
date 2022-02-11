import React from 'react'
import usersStyle from './Paginator.module.css'

let Paginator = (props) => {
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
                    return <span onClick={(e)=>{props.onPageChanged(p)}}className={props.currentPage === p ? usersStyle.selectedPage : null}>{p} </span>
                })}

            </div>
        </div>
    )
}

export default Paginator