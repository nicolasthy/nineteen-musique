import React from "react";

const renderPlaylistImage = playlist => {
  if (playlist.images.length > 0)
    return <img src={playlist.images[0].url} alt={playlist.name} />;
};

const PlaylistItem = ({ playlist }) => {
  console.log(playlist.name);
  return (
    <div className="playlist-item">
      {/* <span>{playlist.name}</span> */}
      <div className="playlist-item_cover">{renderPlaylistImage(playlist)}</div>
    </div>
  );
};

export default PlaylistItem;
