import React from 'react'
import styles from './Parceiros.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


const gallery = Object.values(import.meta.glob('/src/assets/images/logos_circos_parceiros/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }));
const logos = gallery.map((img) => img);

const Parceiros = () => {
  return (
    <section className={styles.mainContainer}>
      <h4>Alguns de nossos clientes</h4>
      <Swiper
      className={`"mySwiper"  ${styles.swiper}` }
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
        >
        {logos.map((logo) =>(
          <SwiperSlide key={logo} className={styles.swiper_slide} >
            <img src={logo} alt={`Logo ${logo}`} />
          </SwiperSlide>
        ))}
      </Swiper>      
    </section>
  )
}

export default Parceiros