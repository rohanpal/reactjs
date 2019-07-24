import React from 'react';
import Home from './pages/homepage/homepage'
import './App.css';
import {Route,Switch} from 'react-router-dom'


const hats =(props)=>{
  console.log(props)
  return(
    <div>Hats</div>
  )
}

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/hats' component={hats}/>
      </Switch>
    </div>
  );
}

export default App;
