import React from 'react'
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
            <h3>Endereço</h3>
            <Mapa/>
          </aside>
        </div>
      </section>
    </>
  )
}

export default Contatos