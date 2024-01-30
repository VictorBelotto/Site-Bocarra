import React, {useRef} from 'react';
import styles from './carrossel.module.css';
import exportImagesCarrossel from './exportImagesCarrossel/';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carrossel = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };;

  return (
    <div className={styles.container_carrossel}>
      <div className={styles.info}>
        <h5>Tecnologia em tensoestruturas</h5>
        <span></span>
        <h1>Lonas de Circo</h1>
        <a href='/projetos'>Acesse a galeria</a>
      </div>

        <Swiper 
        className={styles.swiper}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          loop={true}
        >
        {exportImagesCarrossel.map((imagem) =>(
          <SwiperSlide key={imagem} className={styles.slide}>
            <img  src={imagem} className={styles.imagem}/>
          </SwiperSlide>
        ))}
         <div className={styles.autoplay_progress} slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
      </Swiper>          
    
    </div>
  );
};

export default Carrossel;
