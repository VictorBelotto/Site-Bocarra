import React from 'react'
import styles from './CardCirco.module.css'
import SlidesProjeto from '../SlidesProjeto/SlidesProjeto';
import CardDescricao from '../CardDescricao/CardDescricao';
import listaCircos from '../Portifolio/listaCircos';

const CardCirco = ({circo}) => {
  return (
    <section className={styles.mainContainer} >
      <div className={styles.containerTitulo} >
        <h2>{circo.titulo}</h2>
        <span></span>
      </div>
     <div className={styles.container}  >
      <SlidesProjeto 
       imagens={circo.imagens}
      />

      <CardDescricao 
        descricao={circo.descricao}
      />
     </div>
    </section>
  )
}

export default CardCirco