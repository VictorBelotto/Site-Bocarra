import React from 'react'
import styles from './Parceiros.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const gallery = Object.values(import.meta.glob('/src/assets/images/logos_circos_parceiros/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }));
const logos = gallery.map((img) => img);

const Parceiros = () => {
  return (
    <section className={styles.mainContainer}>
      <h4>Alguns de nossos clientes</h4>
      <Swiper
      loop={true}
      className={`"mySwiper"  ${styles.swiper}` }
      slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        >
        {logos.map((logo) =>(
          <SwiperSlide key={logo} className={styles.swiper_slide} >
            <img src={logo} className={styles.logo} alt={`Logo ${logo}`} />
          </SwiperSlide>
        ))}
      </Swiper>      
    </section>
  )
}

export default Parceiros