import React from 'react'
import styles from './GridCardServicos.module.css'
import CardServicos from '../CardServicos'

const GridCardServicos = () => {
  return (
    <div className={styles.gridContainer}>

    <div className={styles.linhaCentral}></div>
    <div className={styles.linhaL}></div>
    <div className={styles.linhaD}></div>

      <div className={styles.cardL} style={{gridRow: '1'}}>
        <CardServicos 
          titulo={'Tensoestruturas para Circos'}
          conteudo={'Somos especialistas na confecção de tensoestruturas para circos em todo o Brasil. Nossas tensoestruturas oferecem durabilidade, resistência e design inovador.'}
        />
      </div>

      <div className={styles.cardR} style={{gridRow: '2'}}>
        <CardServicos 
          titulo={'Desenvolvimento Personalizado'}
          conteudo={'Desenvolvemos coberturas personalizadas exclusivas, adaptadas às necessidades específicas de cada cliente. Nossa equipe realiza modelagem 3D no software SketchUp para garantir precisão e inovação.'}
        />
      </div>


    </div>
  )
}

export default GridCardServicos