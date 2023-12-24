import React from "react";
import YouTube from "react-youtube";

export default function VideoPlayer({ videoId }) {
  const opts = {
    height: "350px",
    width: "550x",
  };

  return <YouTube videoId={videoId} opts={opts} />;
}
