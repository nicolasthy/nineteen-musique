import React, { Component } from "react";
import { spotifyURI } from "../../helpers/authConfig";

class AuthLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: localStorage.getItem("nineteenAuthToken")
    };
  }

  componentDidMount() {
    let hash = window.location.hash.substr(1);
    let result = hash.split("&").reduce(function(result, item) {
      var parts = item.split("=");
      result[parts[0]] = parts[1];
      return result;
    }, {});

    if (this.state.token) {
      window.location.href = "/browse";
    }

    if (result.access_token) {
      this.setState({ token: result.access_token }, () => {
        localStorage.setItem(
          "nineteenAuthToken",
          `Bearer ${result.access_token}`
        );
        localStorage.setItem(
          "nineteenAuthTokenExpire",
          Math.floor(Date.now() / 1000)
        );

        window.location.href = "/browse";
      });
    }
  }

  render() {
    if (this.state.token) {
      return (
        <div>
          <div>Loading...</div>
        </div>
      );
    }
    return (
      <div>
        <a href={spotifyURI}>Login with Spotify</a>
      </div>
    );
  }
}

export default AuthLogin;
