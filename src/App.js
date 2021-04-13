//import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import AsideContainer from './components/Aside/AsideContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import PostsContainer from './components/Posts/PostsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = (props) => {
  //debugger
  return (
    <div className="wrap">
      <BrowserRouter>
        <HeaderContainer />
          <AsideContainer />
        <main className="main-content">
          <Route path='/posts' render={() => <PostsContainer store={props.store}/>} />
          <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        </main>
      </BrowserRouter>
    </div>
  )
}



export default App;
