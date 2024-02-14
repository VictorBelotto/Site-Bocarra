import React from 'react'
import CircoChrysostenes from '../../../assets/images/bocarra_visual/CircoChrysostenes.jpg' 
import styles from './Historia.module.css'
import Logo from '../../../assets/images/bocarra_visual/rinoRetangulo.svg'

const Historia = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.containerTitulo}>
      
        <h3>Desde 1960</h3>
        <h1>Origem Circense.</h1>
        
      </div>

        <section className={styles.containerHistoria}>

          <div className={styles.containerImagem}>
            <img src={CircoChrysostenes} className={styles.imagem} alt="Imagem Circo Chrysostenes" />
            <h2>Circo Chrysostenes 1984</h2>
          </div>
          
          <div className={styles.containerTextoHistoria}>
             <p>
               Com raízes profundas na tradição circense, a Bocarra Circus carrega consigo uma história que atravessa gerações. Originária de uma linhagem respeitável, nossa jornada começou há décadas, moldando nossa identidade com tradição, paixão e autenticidade. Ao longo dos anos, enfrentamos desafios e celebramos conquistas, fortalecendo nosso compromisso com a excelência e a inovação. Guiados pela nossa herança circense, continuamos aprimorando nossas habilidades, sempre em busca de novas formas de encantar e inspirar nosso público.  
             </p>
          </div>
        </section>
    

      
    </section>
  )
}

export default Historia