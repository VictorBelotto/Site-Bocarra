import React from 'react'
import Endereco from './Endereco/Endereco'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Formulario from './Formulario/Formulario'
import Mapa from '../../components/Mapa/Mapa'
import styles from './Contatos.module.css'


const Contatos = () => {
  return (
    <>
      <section className={styles.contatos}>
        <div className={styles.container}>
          <Formulario/>      
          <aside className={styles.mapa}>
            <Mapa/>
          </aside>
        </div>
      </section>
    </>
  )
}

export default Contatos