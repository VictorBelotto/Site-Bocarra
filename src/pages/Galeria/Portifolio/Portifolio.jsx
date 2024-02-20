import React from 'react';
import styles from './Portifolio.module.css';
import listaCircos from './listaCircos';
import SlideMobile from '../../../components/Swipper/SlideMobile';
import CardCirco from '../CardCirco/CardCirco';
import CardDescricao from '../CardDescricao/CardDescricao';

const Portifolio = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.containerTitulo}>
        <h3>compromisso com a qualidade</h3>
        <h1>nosso portifólio</h1>
      </div>

      <div className={styles.displayDesktop}>
        {listaCircos.map((circo) => (
          <div key={circo.titulo}>
            <CardCirco circo={circo} />
          </div>
        ))}
      </div>

      <div className={styles.displayMobile}>
        {listaCircos.map((circo) => (
          <div key={circo.titulo} className={styles.containerCardMobile} >
            <h2>{circo.titulo}</h2>
            <span></span>
            <div className={styles.containerSlideMobile} >
             <SlideMobile imagens={circo.imagens} />
            </div>
            <CardDescricao descricao={circo.descricao}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portifolio;
