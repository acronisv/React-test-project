import React, { useState } from 'react'
import usersStyle from './Paginator.module.css'

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let pages = []
        let partSize = 10
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }

        let partCount = Math.ceil(pagesCount/partSize)
        let [partNumber, setPartNumber] = useState(1)
        let leftPartCount =  (partNumber-1) * partSize + 1
        let rightPartCount = partNumber * partSize
        console.log(partCount, leftPartCount, rightPartCount)
    return (
        
        <div>
            <div>
                {partNumber > 1 &&
                <button onClick={()=>{ setPartNumber(partNumber - 1)}}>Prev</button>}
                {pages
                    .filter(p => p >= leftPartCount && p <= rightPartCount)
                    .map(p=>{
                    return <span onClick={(e)=>{props.onPageChanged(p)}}className={props.currentPage === p ? usersStyle.selectedPage : null}>{p} </span>
                })}
                {partCount > partNumber &&
                <button onClick={()=>{ setPartNumber(partNumber + 1)}}>Next</button>}
            </div>
        </div>
    )
}

export default Paginator