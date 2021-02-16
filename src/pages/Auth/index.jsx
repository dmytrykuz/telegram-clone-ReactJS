import React from "react";
import { Route } from "react-router-dom";

import { LoginForm, RegisterForm } from "modules";
import { CheckEmail } from "components";

import "./Auth.sass";

const Auth = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <Route exact path="/login" render={() => <LoginForm />} />
        <Route exact path="/registration" render={() => <RegisterForm />}/>
        <Route exact path="/registration/verify" render={() => <CheckEmail />}/>
      </div>
    </section>
  );
};

export default Auth;
