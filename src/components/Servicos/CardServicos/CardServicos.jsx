import React from 'react'
import styles from './CardServicos.module.css'

const CardServicos = ({titulo, conteudo}) => {
  return (
    <div className={styles.notification}>
      <div className={styles.notiglow}></div>
      <div className={styles.notiborderglow}></div>
      <div className={styles.notititle}>{titulo}</div>
      <div className={styles.notibody}>{conteudo}</div>
    </div>  )
}

export default CardServicos