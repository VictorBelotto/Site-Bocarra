import React from 'react';
import styles from './Portifolio.module.css';
import listaCircos from './listaCircos';
import Logo from '../../../assets/images/bocarra_visual/rinoRetangulo.svg';
import Slide from '../../../components/Swipper/Slide';
import {Swiper, SwiperSlide} from 'swiper/react'
import {EffectCards} from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/effect-cards';

const Portifolio = () => {
  return (
    <div className={styles.mainContainer}>

      <div className={styles.containerTitulo}>
        <span>
          <img src={Logo} alt="Logo Bocarra" style={{ width: '150px', padding: '5px' }} />
        </span>
        <h1>Nossos Projetos</h1>
        <span className={styles.linhaDetalhe}></span>
      </div>

      {listaCircos.map((circo) => (
        <section className={styles.container_conteudo} key={circo.titulo}>
          <div className={styles.containerDescricao}>
            <h3>{circo.titulo}</h3>
            <span className={styles.linhaDetalhe}></span>
            <p>{circo.descricao}</p>
          </div>

            <section className={styles.container_slidesMobile}>
              <Slide imagens={circo.imagens}/>
            </section>

          <span className={`${styles.linhaDetalhe} ${styles.linhaDetalhe2}`}></span>
        </section>
      ))}
    </div>
  );
};

export default Portifolio;
