import { connect } from 'react-redux';
import Aside from './Aside';

let mapPropsToState = (state) => {
  return {
    mainMenu: state.sideBar.mainMenu,
    friendList: state.sideBar.friendList
  }
}

const AsideContainer = connect(mapPropsToState)(Aside)

export default AsideContainer