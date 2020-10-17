import React from "react";
import { Auth, Home } from "pages";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* <Auth /> */}
      {/* <Home /> */}
      <Route exact path={["/", "/login"]} render={() => <Auth />} />
      <Route exact path={"/home"} render={() => <Home />} />
    </div>
  );
}

export default App;
