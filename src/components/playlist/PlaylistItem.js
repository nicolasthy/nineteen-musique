import React from "react";
import { Link } from "react-router-dom";

const renderPlaylistImage = playlist => {
  if (playlist.images.length > 0)
    return (
      <div style={{ backgroundImage: `url(${playlist.images[0].url})` }} />
    );
};

const PlaylistItem = ({ playlist }) => {
  let playlistTo = {
    pathname: `/browse/playlist/${playlist.id}`,
    state: { playlist }
  };
  return (
    <Link to={playlistTo} className="playlist-item">
      <div className="playlist-item_cover">{renderPlaylistImage(playlist)}</div>
      <div className="playlist-item_infos">
        <h5>{playlist.name}</h5>
        <span>{playlist.tracks.total} songs</span>
      </div>
    </Link>
  );
};

export default PlaylistItem;
