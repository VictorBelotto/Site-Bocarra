import React from 'react'
import Endereco from './Endereco/Endereco'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Formulario from './Formulario/Formulario'
import Mapa from '../../components/Mapa/Mapa'
import styles from './Contatos.module.css'


const Contatos = () => {
  return (
    <div>
      <Header/>
      <div className={styles.container}>
        <div className={styles.containerForm}>
          <Formulario/>      
          <div className={styles.mapa}>
            <Mapa/>
          </div>
        </div>
      </div>
     
        
      <Footer/>
    </div>
  )
}

export default Contatos