import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../views/Home';
import Articles from '../views/Articles';
import Contact from '../views/Contact';
import Offices from '../views/Offices';
import Login from '../views/Login';
import NavBar from '../components/NavBar';
import Admin from '../views/Admin';
import SuperAdmin from '../views/SuperAdmin';
import { useAuthContext } from '../context/AuthProvider';

export const Routes = () => {
  // if the user is admin, show route to admin panel
  const { isAdmin, isSuperAdmin } = useAuthContext();
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        {isSuperAdmin && (
          <Route exact path="/SuperAdmin" component={SuperAdmin} />
        )}
        {(isAdmin || isSuperAdmin) && (
          <Route exact path="/Admin" component={Admin} />
        )}
        <Route exact path="/Offices" component={Offices} />
        <Route exact path="/Articles" component={Articles} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Login" component={Login} />
        <Route path="/Articles/:id" component={Articles} />
      </Switch>
    </>
  );
};
