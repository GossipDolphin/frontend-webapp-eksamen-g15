import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../views/Home';
import Articles from '../views/Articles';
import Contact from '../views/Contact';
import Offices from '../views/Offices';
import Login from '../views/Login';
import NavBar from '../components/NavBar';

export const Routes = () => (
  <>
    <NavBar />
    <Switch>
      <Route exact path="/Home" component={Home} />
      <Route exact path="/">
        <Redirect to="/Home" />
      </Route>
      <Route exact path="/Offices" component={Offices} />
      <Route exact path="/Articles" component={Articles} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Login" component={Login} />
    </Switch>
  </>
);
