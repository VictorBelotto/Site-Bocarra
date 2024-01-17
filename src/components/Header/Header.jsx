import React from 'react'
import LogoBranco from '../../assets/images/bocarra_visual/L1Preto.svg'
import styles from './Header.module.css'
const Header = ()=> {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${styles.cabecalho} ${isOpen ? styles['nav-open'] : ''}`}>
      <div className={styles.containerLogo}>
        <img src={LogoBranco} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.menuBar}>
      <input className={styles.btn_} type="checkbox" id={styles.checkbox} checked={isOpen} onChange={toggleNavBar} />
      <label htmlFor={styles.checkbox} className={styles.toggle}>
        <div className={styles.bar + ' ' + styles['bar-top']}></div>
        <div className={styles.bar + ' ' + styles['bar-middle']}></div>
        <div className={styles.bar + ' ' + styles['bar-bottom']}></div>
      </label>
      </div>
   
      <nav className={styles.navBar}>
        <a href="/" className={styles.navBar_a}>
          Home
        </a>
        <a href="/projetos" className={styles.navBar_a}>
          Projetos
        </a>
        <a href="/empresa" className={styles.navBar_a}>
          Empresa
        </a>
        <a href="/contatos" className={styles.navBar_a}>
          Contatos
        </a>
      </nav>
    </header>
  );
}

export default Header