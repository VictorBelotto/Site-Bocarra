import React from 'react'
import styles from './Footer.module.css'
import LogoBranco from '../../assets/images/bocarra_visual/LogoBranco.png'
import { FaFacebook, FaInstagram, FaWhatsapp  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = ()=> {
  return (
  <div className={styles.rodape}>

    <div className={styles.social_list}>
      <img style={{width: '250px'}} src={LogoBranco} alt="/" />
      <ul>
        <li>
          <a  href="/"><FaFacebook  className={styles.facebook} /></a>
        </li>
        <li>
          <a className={styles.instagramGradientBackground} href="/">
            <FaInstagram className={styles.instagram} />
          </a>
        </li>
        <li>
          <a href="/"><FaWhatsapp className={styles.whatsapp}  /></a>
        </li>
        <li>
          <a  href="/"><SiGmail className={styles.email} /></a>
        </li>
     </ul>
    </div>

    
    <div className={styles.mapa}>

      <div className={styles.info}>
        <p>Av. José Carlos do Amaral Galvão, 582 - Campinas - SP</p>
        <p>Tel (19) 9 9999-8888</p>
        <p>E-mail: bocarra@email.com</p>
      </div>

      <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.4100297795808!2d-47.09731084202674!3d-22.963477290187747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c9758ac085ab%3A0x80810d6a5b39cb27!2sAv.%20Jos%C3%A9%20Carlos%20do%20Amaral%20Galv%C3%A3o%2C%20582%20-%20Jardim%20Itatinga%2C%20Campinas%20-%20SP%2C%2013051-160!5e0!3m2!1spt-BR!2sbr!4v1704825380292!5m2!1spt-BR!2sbr"  loading="lazy" >
      </iframe>
    </div>
    
  </div>
  )
}

export default Footer