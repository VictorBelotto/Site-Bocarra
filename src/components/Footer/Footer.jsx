import React from 'react'
import styles from './Footer.module.css'
import Logo from '../../assets/images/bocarra_visual/rinoRetangulo.svg'
import { FaFacebook, FaInstagram, FaWhatsapp  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = ()=> {
  return (
    <div className={styles.rodape}>
        <div className={styles.rodapeConteudo}>
          <div className={styles.social_list}>
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
          <img style={{width: '200px'}} src={Logo} alt="/" />
        </div>

        <div className={styles.direitos}>
          <p>&copy; Bocarra Circus. Todos os direitos reservados 2024.</p>
          <a href="https://github.com/VictorBelotto" target="_blank" rel="noopener noreferrer">Desenvolvido por Victor Belotto</a>
        </div>
    </div>
   
  )
}

export default Footer