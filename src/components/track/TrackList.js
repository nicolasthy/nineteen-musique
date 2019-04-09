import React from "react";

import TrackItem from "./TrackItem";

const TrackList = ({ tracks }) => {
  console.log(tracks);
  return (
    <div>
      {tracks.map((item, index) => (
        <TrackItem key={item.track.id} index={index} item={item} />
      ))}
    </div>
  );
};

export default TrackList;
