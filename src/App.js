//import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import AsideContainer from './components/Aside/AsideContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import PostsContainer from './components/Posts/PostsContainer';
import StoreContext from './StoreContext';

const App = (props) => {
  //debugger
  return (
    <div className="wrap">
      <BrowserRouter>
        <Header />
        <StoreContext.Provider value={props.store}>
          <AsideContainer />
        </StoreContext.Provider>
        <main className="main-content">
          <Route path='/posts' render={() => <PostsContainer store={props.store}/>} />
          <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>} />
        </main>
      </BrowserRouter>
    </div>
  )
}



export default App;
