import React from "react";
import { Route } from "react-router-dom";

import { LoginForm, RegisterForm } from "modules";

import "./Auth.sass";

const Auth = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <Route exact path={["/", "/login"]} render={() => <LoginForm />} />
        <Route exact path="/register" render={() => <RegisterForm />}/>
      </div>
    </section>
  );
};

export default Auth;
