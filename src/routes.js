import React from "react";
import PropTypes from "prop-types";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./containers/screens/Register";
import Login from "./containers/screens/Login";
import WelcomePage from "./containers/screens/WelcomePage";
import Home from "./containers/screens/Home";
import Account from "./containers/screens/Account";
import Transfer from "./containers/screens/Transfer";
import Transactions from "./containers/screens/Transactions";
import Authentication from "./hocs/Authentication";

const NavbarRoute = () => (
  <Navbar>
    <Route exact path="/home" component={Authentication(Home)} />
    <Route exact path="/account" component={Authentication(Account)} />
    <Route
      exact
      path="/transactions"
      component={Authentication(Transactions)}
    />
    <Route exact path="/transfer" component={Authentication(Transfer)} />
  </Navbar>
);

/**
 * App routes
 */
const Routes = () => (
  <Switch>
    <Route exact path="/" component={Authentication(WelcomePage, false)} />
    <Route exact path="/login" component={Authentication(Login, false)} />
    <Route exact path="/register" component={Authentication(Register, false)} />
    <NavbarRoute />
  </Switch>
);

export default Routes;
