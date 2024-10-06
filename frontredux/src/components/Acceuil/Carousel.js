

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { urlimage } from '../../Axios/Api';
import { useDispatch, useSelector } from 'react-redux';
import { getVoitures } from '../../features/voitureSlice';
import { useEffect } from 'react';

function MultipleCarousels() {
  const voitures = useSelector((state) => state.storevoitures.voitures);
  const dispatch = useDispatch();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const carouselItemStyle = {
    height: '300px', // Ajustez la hauteur souhaitée ici
  };
  
  useEffect(() => {
    // Chargez les données des voitures au chargement initial de la page
    dispatch(getVoitures());
  }, [dispatch]);

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      removeArrowOnDeviceType={['tablet', 'mobile']}
    >
      {voitures.map((voiture, idx) => (
        <div key={idx} className="carousel-image" style={carouselItemStyle}>
          <img
            src={`${urlimage}${voiture.imagevoiture}`}
            alt={`Car Image ${idx}`}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      ))}
    </Carousel>
  );
}

export default MultipleCarousels;
