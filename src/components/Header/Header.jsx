import React from 'react'
import LogoBranco from '../../assets/images/bocarra_visual/L1Preto.svg'
import styles from './Header.module.css'
const Header = ()=> {
  return (
    <header className={styles.cabecalho}>
      <a href='/' className={styles.containerLogo}>
        <img src={LogoBranco} alt="Logo" className={styles.logo} />
      </a>
        <nav className={styles.navBar}>
          <input  type="checkbox" id={styles.checkbox} className={styles.checkbox}/>
            <label htmlFor={styles.checkbox} className={styles.toggle}>
              <div className={styles.bar + ' ' + styles['bar-top']}></div>
              <div className={styles.bar + ' ' + styles['bar-middle']}></div>
              <div className={styles.bar + ' ' + styles['bar-bottom']}></div>
            </label>

          <ul className={styles.menu}>
            <li className={styles.navBar_li}>
              <a href="/" >
                Home
              </a>
            </li>
            <li className={styles.navBar_li}>
              <a href="/projetos" >
                Projetos
              </a>
            </li>
            <li className={styles.navBar_li}>
              <a href="/empresa" >
                Empresa
              </a>
            </li>
            <li className={styles.navBar_li}>
              <a href="/contatos" >
                Entre em contato
              </a>
            </li>
          </ul>
       
        </nav>
    </header>
  );
}

export default Header