import React from 'react'
import LogoBranco from '../../assets/images/bocarra_visual/LogoBranco.png'
import styles from './Header.module.css'
const Header = ()=> {
  return (
    <header className={styles.cabecalho}>
        <h1><img src={LogoBranco} alt="logo" className={styles.logo} /></h1>
        <nav className={styles.navBar}>
            <a href="/" className={styles.navBar_a}>Home</a>        
            <a href="/projetos" className={styles.navBar_a}>Projetos</a>        
            <a href="/" className={styles.navBar_a}>Empresa</a>        
            <a href="/" className={styles.navBar_a}>Contatos</a>        
        </nav>
    </header>
  )
}

export default Header