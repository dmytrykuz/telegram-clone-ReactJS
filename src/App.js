import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import { Auth, Home } from "pages";

const App = (props) => {
  const { isAuth } = props;
  return (
    <div className="app">
      <Switch>
        <Route exact path={["/login", "/registration", "/registration/verify"]} render={() => <Auth />} />
        <Route
          path="/"
          render={() => (isAuth ? <Home /> : <Redirect to="/login" />)}
        />
      </Switch>
    </div>
  );
};

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
