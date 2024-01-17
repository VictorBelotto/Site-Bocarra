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
            <li>
              <a href="/" className={styles.navBar_a}>
                Home
              </a>
            </li>
            <li>
              <a href="/projetos" className={styles.navBar_a}>
                Projetos
              </a>
            </li>
            <li>
              <a href="/empresa" className={styles.navBar_a}>
                Empresa
              </a>
            </li>
            <li>
              <a href="/contatos" className={styles.navBar_a}>
                Contatos
              </a>
            </li>
          </ul>
       
        </nav>
    </header>
  );
}

export default Header