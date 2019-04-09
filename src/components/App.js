import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import PrivateRoute from "./helpers/PrivateRoute";

import AuthLogin from "./auth/AuthLogin";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <PrivateRoute path="/browse" component={Dashboard} />
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={AuthLogin} />
      </BrowserRouter>
    </div>
  );
};

export default App;
