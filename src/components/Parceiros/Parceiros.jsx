import React from 'react'
import styles from './Parceiros.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const gallery = Object.values(import.meta.glob('/src/assets/images/logos_circos_parceiros/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }));
const logos = gallery.map((img) => img);

const Parceiros = () => {
  const [larguraTela, setLarguraTela] = React.useState(5);

  const atualizarLarguraTela = () => {
    window.innerWidth < 500 ? setLarguraTela(2) : setLarguraTela(5);
    console.log( 'att')
  };

  React.useEffect(() => {
    atualizarLarguraTela();

    const handleResize = () => {
      atualizarLarguraTela();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <section className={styles.mainContainer}>
      <div className={styles.containerTitulo} >
        <h3>seu espetáculo</h3>
        <h1>nossos clientes</h1>
      </div>
      <Swiper
      className={`"mySwiper"  ${styles.swiper}` }
        slidesPerView={larguraTela}
        spaceBetween={0}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
       
        loop={true}
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