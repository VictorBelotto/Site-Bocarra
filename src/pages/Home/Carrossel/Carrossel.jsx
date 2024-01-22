import React from 'react';
import styles from './carrossel.module.css';
import exportImagesCarrossel from '../../../assets/images/imagens_carrossel/exportImagesCarrossel';

const Carrossel = () => {
  const imagens = exportImagesCarrossel;


  return (
    <div className={styles.container_carrossel}>
      <div className={styles.info}>
        <h5>Tecnologia em tensoestruturas</h5>
        <span></span>
        <h1>Lonas de Circo</h1>
        <a href='/projetos'>Veja mais na Galeria</a>
      </div>
      <div className={styles.slide}>
          <img
            src={imagens[1]}
            className={styles.imagem}
          />
      
      </div>
    </div>
  );
};

export default Carrossel;
