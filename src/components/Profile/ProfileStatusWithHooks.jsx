import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {
    // let stateWithSetState = useState(false)
    // let editMode = stateWithSetState[0]
    // let setEditMode = stateWithSetState[0]

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        <>{console.log('render')}
            <div>
                {!editMode ?
                    <div>
                        <span onDoubleClick={activateEditMode}>{props.status || '---'}</span>
                    </div> :
                    <div>
                        <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}></input>
                    </div>
                }
            </div>
        </>
    )

}

export default ProfileStatusWithHooks