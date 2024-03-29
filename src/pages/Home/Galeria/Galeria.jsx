import React from 'react'
import styles from './Galeria.module.css'
import cricoDosSonhos from '../../../assets/images/imagens_galeria/cricoDosSonhos.png'
import portoRico from '../../../assets/images/imagens_galeria/portoRico.png'
import circoFantastico from '../../../assets/images/imagens_galeria/circoFantastico.png'
import circoImperio from '../../../assets/images/imagens_galeria/circoImperio.png'
import circoDosSonhos2 from '../../../assets/images/imagens_galeria/circoDosSonhos2.png'
import circoGlobo from '../../../assets/images/imagens_galeria/circoGlobo.png'

const Galeria = () => {
  return (
    <section className={styles.mainContainer} >
      <span></span>
      <h2>"Cobrindo Sonhos, Criando Espetáculos - Nossas Lonas, Seu Circo!"</h2>
      <span></span>

      <div className={styles.containerTitulo} >
        <h3>galeria</h3>
        <h1>alguns projetos</h1>
      </div>
      <div className={styles.contaier} >
        <div className={styles.linha1}>
          <img src={portoRico} alt="" />
          <img src={cricoDosSonhos} alt="" />
          <img src={circoFantastico} alt="" />
        </div>
        <div className={styles.linha2}>
          <img src={circoImperio} alt="" />
        </div>
        <div className={styles.linha3}>
          <img src={circoDosSonhos2} alt="" />
          <img src={circoGlobo} alt="" />
        </div>
      </div>
      
      <a href="/galeria" className={styles.vejaMais} >Veja mais na galeria</a>

      
    </section>
  )
}

export default Galeria