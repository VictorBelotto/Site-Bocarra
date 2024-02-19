import React, { useState } from 'react';
import styles from './SlidesProjetos.module.css';
import listaCircos from '../Portifolio/listaCircos';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Carousel({imagens}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const circo = imagens;
  

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? circo.length - 1 : prevIndex - 1));
  };

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === circo.length - 1 ? 0 : prevIndex + 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      {/* Carrossel principal */}
      <div className={styles.carousel}>
        <button onClick={handleClickPrev} className={`${styles.navButton} ${styles.prevButton}`}>
          
        </button>
        <div className={styles.imageContainer}>
          {circo.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className={`${styles.image} ${index === currentIndex ? styles.active : ''}`}
            />
          ))}
        </div>
        <button onClick={handleClickNext} className={`${styles.navButton} ${styles.nextButton}`}>
          
        </button>
      </div>

      {/* Miniaturas */}
      <Swiper 
        className={styles.thumbnailsContainer}
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, FreeMode]}
       >
        
          {circo.map((thumbnail, index) => (
          <SwiperSlide className={styles.thumbnails} key={thumbnail}>
            <img
              key={index}
              src={thumbnail}
              alt={`Thumbnail ${index}`}
              className={`${styles.thumbnail} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => handleThumbnailClick(index)}
            />
          </SwiperSlide>
          ))}
        
      </Swiper>
    </div>
  );
}
