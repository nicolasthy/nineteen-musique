import React, { Component } from "react";
import { fetchSpotifyApi } from "../../helpers/spotifyApi";

import TrackList from "../track/TrackList";

class PlaylistDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: []
    };
  }
  componentDidMount() {
    fetchSpotifyApi(
      `${this.props.location.state.playlist.tracks.href}?market=FR`,
      false
    ).then(data => {
      let tracks = this.state.tracks.concat(data.items);
      this.setState({ tracks });
    });
  }

  renderTracks() {
    if (this.state.tracks.length > 0)
      return <TrackList tracks={this.state.tracks} />;
  }

  render() {
    const playlist = this.props.location.state.playlist;
    console.log(playlist);

    return (
      <div>
        <h1>{playlist.name}</h1>
        {this.renderTracks()}
      </div>
    );
  }
}

export default PlaylistDetails;
