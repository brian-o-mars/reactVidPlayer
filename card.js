import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ReactPlayer from "react-player";
import Stack from "@mui/material/Stack";

export default function MediaCard() {
  const [state, setState] = useState({
    playing: true,
  });

  const { playing } = state;

  const playerRef = useRef(null);

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };
  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 5);
  };
  const handleFoward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 5);
  };
  const handleStop = () => {
    playerRef.current.seekTo(0);
    setState({ playing: !state.playing });
  };

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=Y-OLcnr8eNo"
        playing={playing}
        controls
      />

      <Stack spacing={2} direction="row">
        <Button size="small" variant="contained" onClick={handlePlayPause}>
          Play
        </Button>
        <Button size="small" variant="contained" onClick={handleRewind}>
          Rewind{" "}
        </Button>
        <Button size="small" variant="contained" onClick={handleFoward}>
          Forward{" "}
        </Button>
        <Button size="small" variant="contained" onClick={handleStop}>
          Stop
        </Button>
      </Stack>
    </div>
  );
}
