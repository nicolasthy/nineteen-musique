import React, { Component } from "react";
import { fetchSpotifyApi } from "../../helpers/spotifyApi";

import PlaylistItem from "./PlaylistItem";

const PLAYLISTS_PER_PAGE = 20;

class PlaylistList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: null,
      count: 0,
      page: 0
    };
  }

  componentDidMount() {
    this.getPlaylists();
  }

  getPlaylists() {
    let offset = this.state.page * PLAYLISTS_PER_PAGE;
    fetchSpotifyApi(
      `/me/playlists?limit=${PLAYLISTS_PER_PAGE}&offset=${offset}`
    ).then(data => {
      console.log(data);
      this.setState({
        playlists: data.items,
        count: data.total,
        page: this.state.page + 1
      });
    });
  }

  renderPlaylists() {
    if (this.state.playlists && this.state.playlists.length > 0) {
      console.log(this.state.playlists);
      return this.state.playlists.map(item => (
        <PlaylistItem key={item.id} playlist={item} />
      ));
    }
  }

  render() {
    return (
      <div>
        <h1>List of playlists</h1>
        {this.renderPlaylists()}
        <div>
          <button onClick={this.getPlaylists.bind(this)}>Next page</button>
        </div>
      </div>
    );
  }
}

export default PlaylistList;
