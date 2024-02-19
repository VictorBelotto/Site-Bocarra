import React from 'react';
import styles from './Portifolio.module.css';
import listaCircos from './listaCircos';
import SlideMobile from '../../../components/Swipper/SlideMobile';
import CardCirco from '../CardCirco/CardCirco';



const Portifolio = () => {
  return (
    <div className={styles.mainContainer}>

      <div className={styles.containerTitulo}>
        <h3>compromisso com a qualidade</h3>
        <h1>nosso portifólio</h1>
      </div>

      {
        listaCircos.map((circo) =>(
        <CardCirco
          key={circo.titulo}
          circo={circo}
        />
        ))
      }

      
      
    </div>
  );
};

export default Portifolio;
