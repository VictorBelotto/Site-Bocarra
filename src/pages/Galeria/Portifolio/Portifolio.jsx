import React from 'react';
import styles from './Portifolio.module.css';
import listaCircos from './listaCircos';
import Logo from '../../../assets/images/bocarra_visual/rinoRetangulo.svg';
import SlideMobile from '../../../components/Swipper/SlideMobile';
import Slide from '../../../components/Swipper/Slide';


const Portifolio = () => {
  return (
    <div className={styles.mainContainer}>

      <div className={styles.containerTitulo}>
        <span>
          <img src={Logo} alt="Logo Bocarra" style={{ width: '150px', padding: '5px' }} />
        </span>
        <h1>Galeria de Projetos</h1>
        <span className={styles.linhaDetalhe}></span>
      </div>

      {listaCircos.map((circo) => (
        <section className={styles.container_conteudo} key={circo.titulo}>
          <div className={styles.containerDescricao}>
            <h2>{circo.titulo}</h2>
            <span className={styles.linhaDetalhe}></span>
            <p className={styles.descricao}>{circo.descricao}</p>
          </div>

            <section className={styles.container_slides}>
              <Slide imagens={circo.imagens}/>
            </section>  

            <section className={styles.container_slidesMobile}>
              <SlideMobile imagens={circo.imagens}/>
            </section>

          <span className={`${styles.linhaDetalhe} ${styles.linhaDetalhe2}`}></span>
        </section>
      ))}
    </div>
  );
};

export default Portifolio;
