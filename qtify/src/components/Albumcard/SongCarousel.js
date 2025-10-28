import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Grid, IconButton } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import AlbumCard from './AlbumCard';
import SwiperCore from 'swiper';
import RightNavigationIcon from './Rightnavibut';
import LeftNavigationIcon from './Leftnavigbut';
import SongCard from './SongCard';

// Initialize Swiper core modules
SwiperCore.use([]); // No additional modules needed for manual navigation

const SongCarousel = ({ albums }) => {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <Grid container justifyContent="center">
      <Grid item justifyContent={"center"} alignItems="center">
        <IconButton color="primary" className="swiper-button-prev" onClick={handlePrevClick}>
          <LeftNavigationIcon />
        </IconButton>
      </Grid>
      <Grid item xs={10} lg={10}>
        <Swiper
          spaceBetween={20}
          slidesPerView={7}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {albums.map((album, index) => (
            <SwiperSlide key={index}>
              {/* <AlbumCard album={album} /> */}
              <SongCard key={album.id} album={album}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
      <Grid item>
        <IconButton color="primary" className="swiper-button-next" onClick={handleNextClick}>
          <RightNavigationIcon/>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default SongCarousel;
