//import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import PostsContainer from './components/Posts/PostsContainer';

const App = (props) => {
  //console.log(props)

  return (
    <div className="wrap">
      <BrowserRouter>
        <Header />
        <Aside state={props.state.sideBar}/>
        <main className="main-content">
          <Route path='/posts' render={() => <PostsContainer store={props.store}/>} />
          <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>} />
        </main>
      </BrowserRouter>
    </div>
  )
}



export default App;
