import React from 'react'
import CircoChrysostenes from '../../../assets/images/bocarra_visual/CircoChrysostenes.jpg' 
import styles from './Historia.module.css'
import Logo from '../../../assets/images/bocarra_visual/rinoRetangulo.svg'

const Historia = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.containerTitulo}>
        <span><img src={Logo} alt="Logo Bocarra" style={{width: '150px', padding: '5px', }} /></span>
        
        <h1>Sobre nós</h1>
        <span className={styles.linhaDetalhe}></span>
      </div>

        <section className={styles.containerHistoria}>

          <div className={styles.containerImagem}>
            <img src={CircoChrysostenes} className={styles.imagem} alt="Imagem Circo Chrysostenes" />
            <h2>Circo Chrysostenes 1984</h2>
          </div>
          
          <div className={styles.containerTextoHistoria}>
            <h2>Origem Circense</h2>
             <p>
             Com raízes profundas na tradição circense, a Bocarra Circus carrega consigo uma história que atravessa gerações. Originária de uma linhagem respeitável, nossa jornada começou há décadas, moldando nossa identidade com tradição, paixão e autenticidade.  
             </p>
          </div>
        </section>
        <span className={`${styles.linhaDetalhe} ${styles.linhaDetalhe2}`}></span>

      
    </section>
  )
}

export default Historia