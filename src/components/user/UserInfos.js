import React, { Component } from "react";

import { fetchSpotifyApi } from "../../helpers/spotifyApi";

class UserInfos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    fetchSpotifyApi("/me").then(data => this.setState({ user: data }));
  }

  render() {
    let user = this.state.user;
    console.log(user);

    if (user && !user.error) {
      return (
        <div>
          <div>
            <span>{user.display_name}</span>
            <span>{user.email}</span>
          </div>
          <div>
            <span>
              <strong>{user.followers.total}</strong> Followers
            </span>
          </div>
        </div>
      );
    }

    return <div />;
  }
}

export default UserInfos;
