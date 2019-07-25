import React from 'react';
import Home from './pages/homepage/homepage'
import './App.css';
import {Route,Switch} from 'react-router-dom'
import ShopPage from './pages/ShopPage/ShopPage'



function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
