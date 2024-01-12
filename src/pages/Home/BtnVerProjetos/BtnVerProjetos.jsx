import React from 'react'
import styles from './BtnVerProjetos.module.css'

const BtnVerProjetos = () => {
  return (
    <div>
      <button className={styles.learnMore}>
        <span className={styles.circle} aria-hidden="true">
        <span className={`${styles.icon} ${styles.arrow}`}></span>
        </span>
        <a href='/projetos' alt='Pagina Projetos' className={styles.buttonText}>&nbsp; Ver Projetos</a>
      </button>
    </div>
  )
}

export default BtnVerProjetos