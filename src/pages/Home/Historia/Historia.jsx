import React from 'react'
import CircoChrysostenes from '../../../assets/images/bocarra_visual/CircoChrysostenes.jpg' 
import styles from './Historia.module.css'
import Logo from '../../../assets/images/bocarra_visual/Logo.png'

const Historia = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.containerTitulo}>
        <span><img src={Logo} alt="Logo Bocarra" style={{width: '50px', padding: '5px'}} /></span>
        
        <h2>Nossa Historia</h2>
        <p>Especialistas em lonas de Circo  desde 1900</p>
        <span className={styles.linhaDetalhe}></span>
      </div>

        <div className={styles.containerHistoria}>

          <div className={styles.containerImagem}>
            <img src={CircoChrysostenes} className={styles.imagem} alt="Imagem Circo Chrysostenes" />
          </div>
          
          <div className={styles.containerTextoHistoria}>
             <p>
              Com três décadas de experiência, a Bocarra Circus é uma líder na fabricação de lonas para circo no Brasil. Originária de uma respeitável linhagem circense, nossa empresa tem suas raízes em uma tradição familiar passada de geração em geração. Hoje, nos destacamos por nossa especialização na fabricação de lonas de alta qualidade, combinando a tradição circense com inovação e precisão. 
             </p>
          </div>
        </div>
     
        
        <span className={`${styles.linhaDetalhe} ${styles.linhaDetalhe2}`}></span>
        
      
      
    </section>
  )
}

export default Historia