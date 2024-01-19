import React from 'react'
import styles from './CardServicos.module.css'

const CardServicos = ({titulo, conteudo}) => {
  return (
    <div className={styles.notification}>
      <div class={styles.notiglow}></div>
      <div class={styles.notiborderglow}></div>
      <div class={styles.notititle}>{titulo}</div>
      <div class={styles.notibody}>{conteudo}</div>
    </div>  )
}

export default CardServicos