import React from "react";

const TrackItem = ({ item, index }) => {
  const track = item.track;
  const artist = track.artists
    .map(function(artist) {
      return artist.name;
    })
    .join(", ");
  return (
    <div className="track-item">
      <div className="track-item_index">{index}.</div>
      <div className="track-item_name">{track.name}</div>
      <div className="track-item_artist">{artist}</div>
    </div>
  );
};

export default TrackItem;
