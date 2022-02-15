import React from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import AsideContainer from './components/Aside/AsideContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer'
import { compose } from 'redux';
import Preloader from './components/common/preloader/preloader';
import { Suspense } from 'react/cjs/react.production.min';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

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
            <Suspense fallback={<Preloader />}>
              <Route path='/dialogs' render={() =><DialogsContainer />} />
              <Route path='/users' render={() =><UsersContainer />} />
            </Suspense>
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

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);
