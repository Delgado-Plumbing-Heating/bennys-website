import React from "react";
import YouTube from "react-youtube";

export default function VideoPlayer({ videoId }) {
  const opts = {
    height: "320px",
    width: "340px",
    padding: "5px",
  };

  return <YouTube videoId={videoId} opts={opts} />;
}
