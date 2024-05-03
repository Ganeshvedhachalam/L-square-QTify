import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import { Box, Grid, Typography, Button, Collapse} from "@mui/material";
import axios from 'axios';
import { useSnackbar } from "notistack";
import AlbumCard from "./AlbumCard";


function Section({title,apiUrl}) {
  const { enqueueSnackbar } = useSnackbar();
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [iscollapsed ,setCollapsed]= useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response= await
          axios.get(apiUrl)
          
      
        setAlbums(response.data);
      } catch (error) {
        console.error('Error fetching albums:', error);
        enqueueSnackbar("Error fetching albums", { variant: "error" });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, [apiUrl,title]);

  const collapsetoggle = () => {
    setCollapsed(!iscollapsed)

  }

  return (
    // <Box height="100vh" overflow="auto" padding={2}>
    <>
      {loading ? (
        <Typography color="white">Loading...</Typography>
      ) : (
        <>

         <Grid container spacing={5} justifyContent="center" >

         <Grid item xs={12} display= "flex " justifyContent="space-between" padding="0px 100px 0px 0px">
              <Typography  marginLeft={15} color="white" variant="h4" align="left" gutterBottom>
             {title}
              </Typography>
          
              
              <Button onClick={collapsetoggle}  > {iscollapsed ? <h1>Expand</h1>: <h1>collapse</h1>} </Button>
              </Grid>
              <Collapse in={!iscollapsed}> 
                  < Grid container spacing={5} justifyContent="center" padding="5px 20px 5px 70px">
                  {albums.map(album => (
                  <Grid  item key={album.id}>
                  <AlbumCard album={album} />
                  </Grid>
                  ))}
                  </Grid>
              </Collapse>
          
          </Grid>
        </>
      )}
    
    </>
  );
}

export default Section;
