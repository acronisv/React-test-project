import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import AsideContainer from './components/Aside/AsideContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer'
import { compose } from 'redux';
import Preloader from './components/common/preloader/preloader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store'

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      <Preloader/>
    }
    return (
      <div className="wrap">
          <HeaderContainer />
          <AsideContainer />
          <main className="main-content">
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/login/' render={() => <Login />} />
          </main>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

let ReactApp = (props) => {
  return <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>
}

export default ReactApp