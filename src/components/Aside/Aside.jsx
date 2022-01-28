import React from 'react';
import asideStyle from './Aside.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Aside = (props) => {

let menuItems = props.mainMenu.map(menuItem => <li key={menuItem.id}><NavLink to={`/${menuItem.link}`} className={asideStyle.link} activeClassName={asideStyle.link_active}>{menuItem.name}</NavLink ></li>)
  return (
    <aside className={asideStyle.side_bar}>
      <nav>
        <ul className={asideStyle.main_menu__list}>
          {menuItems}
        </ul>
      </nav>
      <div>
        <h4>Friends</h4>
        <Friends friendList={props.friendList}/>
      </div>
    </aside>
  )
}

export default Aside