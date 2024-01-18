import React from 'react'
import styles from './Slide.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination';

const Slide = ({imagens}) => {
  return (
    <>
      <Swiper  
        className={styles.swiper}
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        loop={true}
        >
        {imagens.map((imagem, index)=>(
          <SwiperSlide  className={styles.swiper__slide} key={index}>
              <img className={styles.imagem} src={imagem} alt={imagem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
    
  )
}

export default Slide