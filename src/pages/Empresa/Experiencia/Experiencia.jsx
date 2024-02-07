import React from 'react'
import lonaReal from '../../../assets/images/bocarra_visual/lonaReal.png'
import lona3D from '../../../assets/images/bocarra_visual/lona3D.png'
import styles from './Experiencia.module.css'

const Experiencia = () => {
  return (
    <main className={styles.main}>
      <h1>Nosso Propósito</h1>
      <section className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardMesage}>
            <h2>Experiência de 30 anos</h2>
            <p>
              Com mais de 30 anos dedicados à fabricação de lonas circenses, a Bocarra Circus acumula uma expertise única. Nossa jornada é marcada por projetos bem-sucedidos e uma sólida reputação como parceiro confiável e criativo. A experiência é nossa maior aliada na busca pela excelência.
            </p>
          </div>
          <span></span>
            <div className={styles.cardImage}>
              
              <img src={lonaReal} alt={lonaReal} />
              <h2>Imagem real</h2>
            </div>
          </div>
        <div className={styles.card}>
          <div className={styles.cardMesage}>
            <h2>Qualidade</h2>
            <p>
              Acreditamos que a qualidade transcende a simples aparência. Em nossas lonas, buscamos excelência em cada detalhe, desde a projeção em 3D até a durabilidade. Não se trata apenas de lonas bonitas, mas sim de ferramentas eficazes que atendem aos mais altos padrões de desempenho, segurança e estética.
            </p>
          </div>
          <span></span>
          <div className={styles.cardImage}>
            
            <img src={lona3D} alt={lona3D} />
            <h2>Imagem 3D</h2>
          </div>
        </div>
      </section>
      <span className={styles.span}></span>
    </main>
  )
}

export default Experiencia