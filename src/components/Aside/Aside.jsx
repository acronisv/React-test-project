import React from 'react';
import asideStyle from './Aside.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Aside = (props) => {

let menuItems = props.state.mainMenu.map(menuItem => <li><NavLink to={`/${menuItem.link}`} activeClassName={asideStyle.active}>{menuItem.name}</NavLink ></li>)
  return (
    <aside className={asideStyle.side_bar}>
      <nav className="main-menu">
        <ul>
          {menuItems}
        </ul>
      </nav>
      <div>
        <h4>Friends</h4>
        <Friends state={props.state}/>
      </div>
    </aside>
  )
}

export default Aside