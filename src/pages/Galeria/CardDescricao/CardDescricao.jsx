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
        <h3>informações</h3>
        <span></span>
      </div>

      <div className={styles.containerDescricao}>

        <div className={styles.containerInfos}>
          <h2>lona principal <img src={svgLona} /></h2>
          <span></span>
          <div className={styles.infos}>
              <div>
                <h5>dimenções</h5>
                <p>{lonaPrincipal.dimencao}</p>
              </div>
              <div>
                <h5>cúpula</h5>
                <p>{lonaPrincipal.cupula}</p>
              </div>
              <div>
                <h5>modelo</h5>
                <p>{lonaPrincipal.modelo}</p>
              </div>
          </div>
        </div>
        <div className={styles.containerInfos}>
          <h2>marquise <img src={svgMarquise} /></h2>
          <span></span>
          <div className={styles.infos}>
              <div>
                <h5>dimenções</h5>
                <p>{marquise.dimencao}</p>
              </div>
              <div>
                <h5>modelo</h5>
                <p>{marquise.modelo}</p>
              </div>
             
          </div>
        </div>
        <div className={styles.containerInfos}>
          <h2>informações gerais <img src={svgLayout} /></h2>
          <span></span>
          <div className={styles.infos}>
              <div>
                <h5>cor interna</h5>
                <p>{infoGeral.corInterna}</p>
              </div>
              <div>
                <h5>cor externa</h5>
                <p>{infoGeral.corExterna}</p>
              </div>
              <div>
                <h5>layout</h5>
                <p>{infoGeral.layout}</p>
              </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default CardDescricao