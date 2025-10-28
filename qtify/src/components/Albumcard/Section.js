import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import { Box, Grid, Typography, Button, Collapse } from "@mui/material";
import axios from "axios";
import { useSnackbar } from "notistack";
import AlbumCard from "./AlbumCard";
import Carousel from "./Carousel";

function Section({ title, apiUrl }) {
  const { enqueueSnackbar } = useSnackbar();
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [iscollapsed, setCollapsed] = useState(false);
  const clientId = "6276f465b33b44b3a3449eed925e6199";
  const clientSecret = "ea26e107a9fe4cd7830c94e48f621f11";

  // const SpotifyToken = async (clientId, clientSecret) => {
  //   const response = await axios.post(
  //     "https://accounts.spotify.com/api/token",
  //     {
  //       grant_type: "client_credentials",
  //       client_id: clientId,
  //       client_secret: clientSecret,
  //     },
  //     {
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //     }
  //   );
  //   return response.data.access_token;
  // };

  useEffect(() => {

    const albumType = title === "Top Album" ? "top" : "new";

    const fetchData = async () => {
      try {
        
        const token = localStorage.getItem("spotify_token");
        if (!token) return;
        // let SpAcessToken = SpotifyToken(clientId, clientSecret);
        console.log("Spotify url:", apiUrl);
        const response = await axios.get(apiUrl, {
          
          headers: {  Authorization: `Bearer ${token}`, },
        });

        console.log("Fetched albums:", response?.data||"fetchea albums");

        setAlbums(albumType ==="top"?response?.data?.categories?.items  : response?.data?.albums?.items || []);
      } catch (error) {
        console.error("Error fetching albums:", error);
        setAlbums([]);
        enqueueSnackbar("Error fetching albums", { variant: "error" });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, [apiUrl, title]);

  const collapsetoggle = () => {
    setCollapsed(!iscollapsed);
  };

  return (
    <Grid container spacing={3} justifyContent="center" marginBottom={5}>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="space-between"
        padding="0px 100px 0px 1px"
      >
        <Typography
          variant="h4"
          align="left"
          gutterBottom
          color="white"
          padding="0px 0px 0px 100px"
        >
          {title}
        </Typography>
        <Button onClick={collapsetoggle}>
          {iscollapsed ? <h1>Show carousel</h1> : <h1>Show All</h1>}
        </Button>
      </Grid>
      <Grid item xs={12}>
        {/* <Collapse in={!iscollapsed}> */}
        {iscollapsed ? (
          <Grid
            container
            spacing={1}
            justifyContent="center"
            padding="0px 0px 0px 100px"
          >
            {albums.map((album) => (
              <Grid
                item
                justifyContent="center"
                key={album.id}
                xs={12}
                sm={6}
                md={4}
                lg={1.5}
              >
                <AlbumCard album={album} />
              </Grid>
            ))}
          </Grid>
        ) : (
          // <Carousel albums={albums} />
          <>
            <Typography color="white">corousel</Typography>
            <Carousel albums={albums} />
          </>
        )}
        {/* </Collapse> */}
      </Grid>
    </Grid>
  );
}

export default Section;
