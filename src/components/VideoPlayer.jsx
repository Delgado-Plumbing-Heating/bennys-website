import React from "react";
import YouTube from "react-youtube";

export default function VideoPlayer({ videoId }) {
  const opts = {
    height: "390px",
    width: "345px",
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}
