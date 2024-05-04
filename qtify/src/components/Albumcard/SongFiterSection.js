import React, { useState, useEffect } from "react";
import { Box, Typography, Tab, Tabs } from "@mui/material";
import axios from "axios";
import { useSnackbar } from "notistack";
import Carousel from "./Carousel";
import SongCarousel from "./SongCarousel";

function SongFilterSection() {
  const { enqueueSnackbar } = useSnackbar();
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [songsResponse, genresResponse] = await Promise.all([
          axios.get("https://qtify-backend-labs.crio.do/songs"),
          axios.get("https://qtify-backend-labs.crio.do/genres")
        ]);
        setSongs(songsResponse.data);
        setGenres(genresResponse.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        enqueueSnackbar("Error fetching data", { variant: "error" });
        setLoading(false);
      }
    };

    fetchData();
  }, [enqueueSnackbar]);

  const handleGenreChange = (event, newValue) => {
    console.log("Selected Genre:", newValue);
    setSelectedGenre(newValue);
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  let filteredSongs = songs;
  if (selectedGenre !== "All") {
    filteredSongs = songs.filter(song => song.genre.key === selectedGenre);
  }
  console.log("Filtered Songs:", filteredSongs);

  return (
    <Box>
      <Typography sx={{display:"flex", alignContent:"initial",marginLeft:15, marginBottom:3}} color="white" variant="h4" gutterBottom>
        Songs
      </Typography>
      <Tabs sx={{marginLeft:15,marginBottom:5}} value={selectedGenre} onChange={handleGenreChange}>
        <Tab  sx={{ backgroundColor: "white" ,color:"green"}} label="All" value="All" />
        {genres.map(genre => (
          <Tab sx={{ backgroundColor: "white", color:"green"}} key={genre.key} label={genre.label} value={genre.key} />
        ))}
      </Tabs>
      {/* <Carousel albums={filteredSongs} /> */}
      <SongCarousel albums ={filteredSongs}/>
    </Box>
  );
}

export default SongFilterSection;
