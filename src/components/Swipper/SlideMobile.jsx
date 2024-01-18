import React from 'react'
import styles from './Slide.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectCards} from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/effect-cards';

const SlideMobile = ({imagens}) => {
  return (
    <>
      <Swiper  
        className={styles.swiper__mobile}
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        loop={true}
        >
        {imagens.map((imagem, index)=>(
          <SwiperSlide  className={styles.swiper__slide__mobile} key={index}>
              <img className={styles.imagem__mobile} src={imagem} alt={imagem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
    
  )
}

export default SlideMobile