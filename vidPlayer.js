import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ReactPlayer from "react-player";
import Stack from "@mui/material/Stack";
import "./vidPlayer.css";
import Comment from "./comment";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export default function VidPlayer() {
  // useStates
  const [state, setState] = useState({
    playing: true,
  });
  const [comments, setComments] = useState([]);

  const [comment, setComment] = useState("");

  const { playing } = state;

  const playerRef = useRef(null);

  // declaring functions for video player buttons
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

  // declaring functions for comment section
  const addComments = () => {
    if (comment) {
      setComments([...comments, comment]);
      setComment("");
      // console.log("Hello", comments);
    }
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  return (
    <div>
      <AppBar style={{ background: "#e6880e" }} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Favour's Video Player
          </Typography>
        </Toolbar>
      </AppBar>

      {/* container for the videoplayer, buttons and comment section */}
      <div className="container">
        <>
          {/* videoplayer */}
          <div className="reactPlayer one">
            <ReactPlayer
              ref={playerRef}
              url="https://www.youtube.com/watch?v=1_ATK0BLc8U&t=3s"
              playing={playing}
              controls
            />
          </div>

          {/* buttons */}
          <div className="btn-stack two">
            <Stack spacing={2} direction="row">
              <Button
                style={{ background: "#e6880e" }}
                size="small"
                variant="contained"
                onClick={handlePlayPause}
              >
                Play
              </Button>
              <Button
                style={{ background: "#e6880e" }}
                size="small"
                variant="contained"
                onClick={handleRewind}
              >
                Rewind{" "}
              </Button>
              <Button
                style={{ background: "#e6880e" }}
                size="small"
                variant="contained"
                onClick={handleFoward}
              >
                Forward{" "}
              </Button>
              <Button
                style={{ background: "#e6880e" }}
                size="small"
                variant="contained"
                onClick={handleStop}
              >
                Stop
              </Button>
            </Stack>
          </div>

          {/* comment section */}
          <div className="comment three">
            <div style={{ marginBottom: "1em" }}>
              <Comment userComs={comments} />
            </div>
            <TextField
              placeholder="add comment"
              size="small"
              variant="outlined"
              onChange={handleComment}
              value={comment}
            />
            <Button
              style={{ background: "#e6880e", marginLeft: "1em" }}
              onClick={addComments}
              variant="contained"
              size="small"
            >
              Send
            </Button>
          </div>
        </>
      </div>
    </div>
  );
}
