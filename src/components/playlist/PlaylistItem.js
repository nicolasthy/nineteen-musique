import React from "react";

const PlaylistItem = ({ playlist }) => {
  return (
    <div>
      <span>{playlist.name}</span>
    </div>
  );
};

export default PlaylistItem;
