import React from 'react'
import Formulario from './Formulario/Formulario'
import styles from './Contatos.module.css'


const Contatos = () => {
  return (
    <>
      <section className={styles.contatos}>
        <div className={styles.container}>
          <Formulario/>    

          <aside className={styles.endereco}>          
              <iframe className={styles.mapa} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.4100297795808!2d-47.09731084202674!3d-22.963477290187747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c9758ac085ab%3A0x80810d6a5b39cb27!2sAv.%20Jos%C3%A9%20Carlos%20do%20Amaral%20Galv%C3%A3o%2C%20582%20-%20Jardim%20Itatinga%2C%20Campinas%20-%20SP%2C%2013051-160!5e0!3m2!1spt-BR!2sbr!4v1704825380292!5m2!1spt-BR!2sbr"  loading="lazy" >
              </iframe>
            <h5>Endereço</h5>
            <p>Av. José Carlos do Amaral Galvão, 582 - Jardim São José</p>
            <p>Seg. à Sex. das 8h às 17h </p>
          </aside>
        </div>
      </section>
    </>
  )
}

export default Contatos