import React from 'react'
import styles from './carrossel.module.css'
import img1 from '../../../images/imagens_carrossel/1.jpg'
import img2 from '../../../images/imagens_carrossel/2.jpg'
import img3 from '../../../images/imagens_carrossel/3.jpeg'

const Carrossel = () => {
  const imagens = [img1,img2,img3]

  return (
    <div>
      <img className={styles.imagem} src={img1} alt="" />
    </div>
  )
}

export default Carrossel