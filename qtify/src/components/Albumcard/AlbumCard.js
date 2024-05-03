import React from "react";
import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";

function AlbumCard({ album }) {
  return (
    <Card sx={{ maxWidth: 250, backgroundColor: "transparent", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 2 }}>
      <CardMedia
        component="img"
        image={album.image}
        alt={album.title}
        sx={{ height: 300, width: 300, objectFit: 'cover' }}
      />
      <CardContent style={{padding:0 }}>
      
        <div style={{ display: "flex", justifyContent: "center",backgroundColor:"white" ,minWidth:"300px"}}>
          <Chip color="primary" label={`${album.follows}  follows`} size="large" variant="filled" clickable style={{ width: 100, marginRight: 8 }} />
        </div>

       
      </CardContent>
      <Typography gutterBottom variant="h6" component="div" color="white" align="center">
          {album.title}
        </Typography>
    </Card>
  );
}

export default AlbumCard;
