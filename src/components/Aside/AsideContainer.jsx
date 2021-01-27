import React from 'react';
import Aside from './Aside';
import StoreContext from '../../StoreContext';

const AsideContainer = () => {

return (
    <StoreContext.Consumer>
      {(store) => (
        <Aside state={store.getState().sideBar}/>
      )}
      
    </StoreContext.Consumer>
  )
}

export default AsideContainer