import React from 'react'
import styles from './Slide.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectCards} from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/effect-cards';

const Slide = ({imagens}) => {
  return (
    <>
      <Swiper  
        className={styles.swiper}
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
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