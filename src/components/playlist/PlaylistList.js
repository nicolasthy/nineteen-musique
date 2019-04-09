import React, { Component } from "react";

import { fetchSpotifyApi } from "../../helpers/spotifyApi";
import PlaylistItem from "./PlaylistItem";

const PLAYLISTS_PER_PAGE = 28;

class PlaylistList extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      playlists: [],
      count: 0,
      page: 0,
      loading: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, false);
    this.getPlaylists();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, false);
  }

  getPlaylists() {
    if (
      this.state.count > 0 &&
      this.state.playlists.length === this.state.count
    )
      return;

    let offset = this.state.page > 0 ? this.state.page * PLAYLISTS_PER_PAGE : 0;

    fetchSpotifyApi(
      `/me/playlists?limit=${PLAYLISTS_PER_PAGE}&offset=${offset}`
    ).then(data => {
      console.log(data);
      let playlists = this.state.playlists.concat(data.items);
      this.setState({
        playlists: playlists,
        count: data.total,
        page: this.state.page + 1,
        loading: false
      });
    });
  }

  handleScroll(event) {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
      !this.state.loading
    ) {
      this.setState({ loading: true }, () => {
        this.getPlaylists();
      });
    }
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
      <div className="playlist">
        <h1>List of playlists</h1>
        <div className="playlist_list">{this.renderPlaylists()}</div>
      </div>
    );
  }
}

export default PlaylistList;
