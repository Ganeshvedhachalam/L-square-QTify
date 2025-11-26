// eslint-disable-next-line
import { FastRewind } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";

import { AudioContext } from "../../context/AudioContext";

function SongCard({ album }) {
  const { setCurrentAudio,currentAudioId } = useContext(AudioContext);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => {
      setCurrentAudio(audio, album.id);
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, [album.id, setCurrentAudio]);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (currentAudioId !== album.id && isPlaying) {
      audioRef?.current?.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [ currentAudioId,album?.id, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) {
      return;
    }
    if (!isPlaying) {
      // setCurrentAudio(audioRef.current, album.id);
      audioRef.current.play();
      // setIsPlaying(true);
    } else {
      audioRef.current.pause();
      // setIsPlaying(false);
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 350,
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 2,
      }}
    >
      <CardMedia
        component="img"
        image={album.images[0].url}
        alt={album.name}
        sx={{ height: 300, width: 300, objectFit: "cover" }}
      />
      <CardContent style={{ padding: 0 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "white",
            minWidth: "300px",
          }}
        >
          <Chip
            color="primary"
            label={`${album.name}`}
            size="large"
            variant="filled"
            clickable
            style={{ width: 100, marginRight: 0 }}
          />
        </div>
      </CardContent>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        align="center"
        sx={{ color: "var(--text-color)" }}
      >
        {album.name}
      </Typography>

      <CardActionArea style={{ padding: 0, width: "100%" }}>
        {/* <audio style={{width:"90%" ,backgroundColor:"",border:"" }} ref={audioRef}  controls src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" preload="auto"/> */}
        <audio
          style={{ width: "90%", border: "", backgroundColor: "" }}
          ref={audioRef}
          controls
          // onPlay={() => {
          //   setCurrentAudio(audioRef.current);
          //   setIsPlaying(true);
          // }}
          // onPause={() => {
          //   setIsPlaying(false);
          // }}
          src={album?.track || " "}
          preload="auto"
        />
      </CardActionArea>

      <Button onClick={togglePlay}>{isPlaying ? "pause" : "play"}</Button>
    </Card>
  );
}
export default SongCard;
