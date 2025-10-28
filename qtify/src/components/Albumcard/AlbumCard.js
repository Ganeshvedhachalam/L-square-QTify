import React from "react";
import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";

function AlbumCard({ album,albumType }) {

  const getImageUrl = (album) => {
    return album?.icons?.[0]?.url || album?.images?.[0]?.url
    // if(albumType==="top"){
    //   return album?.icons[0]?.url ;
    // }
    // if(albumType==="new"){
    //   return album?.images[0]?.url ;
    // }
  // if ("icons" in item) return item.icons[0].url;
  // if ("images" in item) return item.images[0].url;
  // return "";

};
  return (
    <Card
      sx={{
        maxWidth: 250,
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 2,
      }}
    >
      <CardMedia
        component="img"
        image={
          getImageUrl(album,albumType)
        }
        alt={album?.name}
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
        color="white"
        align="center"
      >
        {album?.name}
      </Typography>
    </Card>
  );
}

export default AlbumCard;
