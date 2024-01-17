import React from 'react'
import styles from './Portifolio.module.css';
import listaCircos from './listaCircos'

import Logo from '../../../assets/images/bocarra_visual/rinoRetangulo.svg'

const Portifolio = () => {


  return (
    <div className={styles.mainContainer}>
        <div className={styles.containerTitulo}>
           <span><img src={Logo} alt="Logo Bocarra" style={{width: '150px', padding: '5px'}} /></span>
           <h1>Nossos Projetos</h1>
           <span className={styles.linhaDetalhe}></span>
          </div>

      {listaCircos.map((circo) => (
         <section className={styles.container_conteudo}>
           <div className={styles.container_imagens}>
             {circo.imagens.map((imagem, index) => (
               <img key={index} className={styles.imagens} src={imagem} alt="/" />
             ))}
           </div>
           <div className={styles.containerDescricao}>
             <h3>{circo.titulo}</h3>  
             <span className={styles.linhaDetalhe}></span>
             <p>{circo.descricao}</p>
           </div>
           <span className={`${styles.linhaDetalhe} ${styles.linhaDetalhe2}`}></span>
   
         </section>
      ))}
    </div>
  
  );
}

export default Portifolio