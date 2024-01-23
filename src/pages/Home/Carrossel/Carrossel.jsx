import React from 'react';
import styles from './carrossel.module.css';
import exportImagesCarrossel from './exportImagesCarrossel/';

const Carrossel = () => {
  const imagens = exportImagesCarrossel;
  const [index, setIndex] = React.useState(0);
  setTimeout(
    () => {
      if(index < (imagens.length - 1)){
        setIndex(index + 1)
      } else {
        setIndex(0)
      }
    }, 4000
  );

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
            src={imagens[index]}
            className={styles.imagem}
          />
      </div>
    </div>
  );
};

export default Carrossel;
