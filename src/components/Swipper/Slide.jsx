import React from 'react'
import styles from './Slide.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slide = ({imagens}) => {
  return (
    <>
      <Swiper  
        className={styles.swiper}
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        navigation={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
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