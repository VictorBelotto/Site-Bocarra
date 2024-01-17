import React from 'react'
import styles from './Footer.module.css'
import Logo from '../../assets/images/bocarra_visual/rinoRetangulo.svg'
import { FaFacebook, FaInstagram, FaWhatsapp  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = ()=> {
  return (
    <section className={styles.rodape}>
        
        <section className={styles.social__container}>

            <h2>Conheça nossas redes sociais:</h2>

          <div className={styles.social_list}>
            <ul>
              <li >
                <a className={`${styles.icon} ${styles.containerFacebook}`}  href="/"><FaFacebook className={styles.facebook} /></a>
              </li>
              <li>
                <a className={`${styles.icon} ${styles.containerInstagram}`} href="/">
                  <FaInstagram className={styles.instagram} />
                </a>
              </li>
              <li>
                <a className={`${styles.icon} ${styles.containerWhatsapp}`} href="/"><FaWhatsapp className={styles.whatsapp}  /></a>
              </li>
              <li >
                <a className={`${styles.icon} ${styles.containerEmail}`} href="/"><SiGmail className={styles.email} /></a>
              </li>
            </ul>
           </div>   
            
          </section>

     <img style={{width: '200px', marginRight: '10px'}} src={Logo} alt="/" />
       

        <div className={styles.direitos}>
          <p>&copy; Bocarra Circus. </p>
          <p>Todos os direitos reservados 2024.</p>
          <a href="https://github.com/VictorBelotto" target="_blank" rel="noopener noreferrer">Desenvolvido por Victor Belotto</a>
        </div>
    </section>
   
  )
}

export default Footer