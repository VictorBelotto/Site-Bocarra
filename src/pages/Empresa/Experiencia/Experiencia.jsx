import React from 'react'
import lonaReal from '../../../assets/images/bocarra_visual/lonaReal.png'
import lona3D from '../../../assets/images/bocarra_visual/lona3D.png'
import styles from './Experiencia.module.css'

const Experiencia = () => {
  return (
    <main className={styles.main}>
      <div className={styles.containerTitulo}>
        <span className={styles.linhaDetalheTopo}></span>
        <h3>tecnologia e inovação</h3>
        <h1>Hoje somos especializados em fabricação de lonas para circo.</h1>
      </div>
      <section className={styles.containerMesage}>
        <div className={styles.mesage}>
          <h2>Experiência de 30 anos</h2>
          <p>
            Com mais de 30 anos dedicados à fabricação de lonas circenses, a Bocarra Circus acumula uma expertise única. Nossa jornada é marcada por projetos bem-sucedidos e uma sólida reputação como parceiro confiável e criativo. A experiência é nossa maior aliada na busca pela excelência.
          </p>
        </div>
        <div className={styles.mesage}>
          <h2>Qualidade</h2>
          <p>
            Acreditamos que a qualidade transcende a simples aparência. Em nossas lonas, buscamos excelência em cada detalhe, desde a projeção em 3D até a durabilidade. Não se trata apenas de lonas bonitas, mas sim de ferramentas eficazes que atendem aos mais altos padrões de desempenho, segurança e estética.
          </p>
        </div>
      </section>
      <section className={styles.containerImages}>
        <div className={styles.cardImage}>
          <span className={styles.linhaDetalheImage}></span>
          <h2>Imagem 3D</h2>
          <img src={lona3D} alt={lona3D} />
        </div>
        <div className={styles.cardImage}>
        <span className={styles.linhaDetalheImage2}></span>
          <h2>Imagem real</h2>
          <img src={lonaReal} alt={lonaReal} />
        </div>
      </section>
      <span className={styles.span}></span>
    </main>
  )
}

export default Experiencia