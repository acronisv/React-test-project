import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'

const Dialog = (props) => {
    return (
        <div className={s.dialogs__item + ' ' + s.dialogs__item_active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog