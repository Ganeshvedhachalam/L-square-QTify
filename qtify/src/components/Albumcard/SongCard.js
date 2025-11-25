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
import { useRef, useState } from "react";

function SongCard({ album }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null)

  const togglePlay = () => {

     if (!audioRef.current){
      return 
     }
     if(isPlaying){
      audioRef.current.pause()
     }else{
      audioRef.current.play()
     }

    setIsPlaying((prev) => !prev);

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

       <CardActionArea style={{padding:0,width:"100%"}}>
        {/* <audio style={{width:"90%" ,backgroundColor:"",border:"" }} ref={audioRef}  controls src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" preload="auto"/> */}
        <audio style={{width:"90%" ,border:"",backgroundColor:""}} ref={audioRef} controls src={album?.track||" "} preload="auto"/>
        
        
       </CardActionArea>
        
      

      <Button onClick={togglePlay}>{isPlaying ? "pause" : "play"}</Button>
    </Card>
  );
}
export default SongCard;
