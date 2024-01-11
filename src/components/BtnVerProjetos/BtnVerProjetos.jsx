import React from 'react'
import styles from './BtnVerProjetos.module.css'

const BtnVerProjetos = () => {
  return (
    <div>
      <button className={styles.learnMore}>
        <span className={styles.circle} aria-hidden="true">
        <span className={`${styles.icon} ${styles.arrow}`}></span>
        </span>
        <p className={styles.buttonText}> &nbsp;&nbsp; Ver Projetos</p>
      </button>
    </div>
  )
}

export default BtnVerProjetos