import React from 'react'
import styles from './CardDescricao.module.css'
import svgLona from '../../../assets/images/bocarra_visual/svgLona.svg'
import svgMarquise from '../../../assets/images/bocarra_visual/svgMarquise.svg'
import svgLayout from '../../../assets/images/bocarra_visual/svgLayout.svg'
 
const CardDescricao = ({descricao}) => {
  const {lonaPrincipal, marquise, infoGeral} = descricao
  return (
    <div className={styles.mainContainer}>
      <div className={styles.info}>
        <h2>INFORMAÇÕES</h2>
      </div>

      <div className={styles.containerDescricao}>

        <div className={styles.containerInfos}>
          <h2>Lona Principal</h2>
          <span></span>
          <div className={styles.infos}>
              <div className={styles.containerPropriedades}>
                <h5>Dimenções</h5>
                <p>{lonaPrincipal.dimencao}</p>
              </div>
              <div className={styles.containerPropriedades}>
                <h5>Cúpula</h5>
                <p>{lonaPrincipal.cupula}</p>
              </div>
              <div className={styles.containerPropriedades}>
                <h5>Modelo</h5>
                <p>{lonaPrincipal.modelo}</p>
              </div>
          </div>
        </div>
        <div className={styles.containerInfos}>
          <h2>Marquise</h2>
          <span></span>
          <div className={styles.infos}>
              <div className={styles.containerPropriedades}>
                <h5>Dimenções</h5>
                <p>{marquise.dimencao}</p>
              </div>
              <div className={styles.containerPropriedades}>
                <h5>Modelo</h5>
                <p>{marquise.modelo}</p>
              </div>
             
          </div>
        </div>
        <div className={styles.containerInfos}>
          <h2>Informações Gerais</h2>
          <span></span>
          <div className={styles.infos}>
              <div className={styles.containerPropriedades}>
                <h5>Cor Interna</h5>
                <p>{infoGeral.corInterna}</p>
              </div>
              <div className={styles.containerPropriedades}>
                <h5>Cor Externa</h5>
                <p>{infoGeral.corExterna}</p>
              </div>
              <div className={styles.containerPropriedades}>
                <h5>Layout</h5>
                <p>{infoGeral.layout}</p>
              </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default CardDescricao