import React, { useState, useEffect } from 'react';
import styles from './carrossel.module.css';
import img1 from '../../../images/imagens_carrossel/1.jpg';
import img2 from '../../../images/imagens_carrossel/2.jpg';
import img3 from '../../../images/imagens_carrossel/3.jpeg';
import img4 from '../../../images/imagens_carrossel/4.jpg';
import { Button } from '@mui/material';
import BtnVerProjetos from '../../BtnVerProjetos/BtnVerProjetos';

const Carrossel = () => {
  const imagens = [img3];
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.container_carrossel}>
      <div className={styles.info}>
        <h5>Algum titulo maneiro</h5>
        <span></span>
        <h1>Bocarra <br/> mensagem alguma</h1>
        <BtnVerProjetos/>
      </div>
      <div className={styles.slide}>
        {imagens.map((imagem, i) => (
          <img
            key={i}
            src={imagem}
            alt={`Imagem ${i + 1}`}
            className={`${styles.imagem} ${i === index ? styles.ativo : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrossel;
