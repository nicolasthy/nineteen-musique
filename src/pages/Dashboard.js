import React from "react";
import { Route } from "react-router-dom";

import Header from "../components/Header";

import PlaylistList from "../components/playlist/PlaylistList";
import PlaylistDetails from "../components/playlist/PlaylistDetails";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Route path="/browse" exact component={PlaylistList} />
      <Route path="/browse/playlist/:playlistId" component={PlaylistDetails} />
    </div>
  );
};

export default Dashboard;
