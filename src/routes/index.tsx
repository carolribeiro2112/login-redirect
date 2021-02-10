import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

import Home from '../pages/Home';
import Login from '../pages/Login';


const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Login" exact component={Login}/>
      <Route path="/dashboard" exact component={Dashboard}/> 
    </Switch>
  )
}

export default Routes;