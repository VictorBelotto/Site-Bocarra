import React from 'react'
import styles from './Footer.module.css'
import Logo from '../../assets/images/bocarra_visual/rinoRetangulo.svg'
import { FaFacebook, FaInstagram, FaWhatsapp  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = ()=> {
  return (
    <section className={styles.rodape}>
        
        <section className={styles.social__container}>

            <h3>Conheça nossas redes sociais:</h3>

          <div className={styles.social_list}>
            <ul>
              <li >
                <a className={`${styles.icon} ${styles.containerFacebook}`}  href="/"><FaFacebook className={styles.facebook} /></a>
              </li>
              <li>
                <a className={`${styles.icon} ${styles.containerInstagram}`} 
                target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bocarracircus/">
                  <FaInstagram className={styles.instagram} />
                </a>
              </li>
              <li>
                <a className={`${styles.icon} ${styles.containerWhatsapp}`} href="https://api.whatsapp.com/send?phone=5519996924744&text=Ol%C3%A1%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer"><FaWhatsapp className={styles.whatsapp}  /></a>
              </li>
              <li >
                <a className={`${styles.icon} ${styles.containerEmail}`} href="/"><SiGmail className={styles.email} /></a>
              </li>
            </ul>
           </div>   
            
          </section>

     <img style={{width: '200px', marginRight: '10px'}} src={Logo} alt="/" />
       

        <div className={styles.direitos}>
          <p>&copy; bocarra circus. </p>
          <p>Todos os direitos reservados 2024.</p>
          <a href="https://github.com/VictorBelotto" target="_blank" rel="noopener noreferrer">designed by victor belotto</a>
        </div>
    </section>
   
  )
}

export default Footer