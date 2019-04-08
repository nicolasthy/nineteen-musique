import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import PrivateRoute from "./helpers/PrivateRoute";

import Header from "./Header";
import AuthLogin from "./auth/AuthLogin";
import PlaylistList from "./playlist/PlaylistList";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <PrivateRoute path="/" exact component={PlaylistList} />
        <Route path="/login" component={AuthLogin} />
      </BrowserRouter>
    </div>
  );
};

export default App;
