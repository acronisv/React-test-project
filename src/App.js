//import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Dialogs from './components/Dialogs/Dialogs';
import Posts from './components/Posts/Posts';

const App = (props) => {
  return (
    <div className="wrap">
      <BrowserRouter>
        <Header />
        <Aside state={props.state.sideBar}/>
        <main className="main-content">
          <Route path='/posts' render={() => <Posts postsPage={props.state.postsPage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>} />
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
        </main>
      </BrowserRouter>
    </div>
  )
}



export default App;
