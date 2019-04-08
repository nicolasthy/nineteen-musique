import React, { Component } from "react";

import { fetchSpotifyApi } from "../../helpers/spotifyApi";

class UserInfos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }
  componentDidMount() {
    fetchSpotifyApi("/me").then(data => this.setState({ user: data }));
  }

  render() {
    let user = this.state.user;
    console.log(user);

    return (
      <div>
        <span>{user.display_name}</span>
        <span>{user.email}</span>
      </div>
    );
  }
}

export default UserInfos;
