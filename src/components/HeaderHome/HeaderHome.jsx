import React from 'react'
import LogoBranco from '../../assets/images/bocarra_visual/logoBranca.svg'
import Logo from '../../assets/images/bocarra_visual/rinoRetangulo.svg'
import styles from './HeaderHome.module.css'
const HeaderHome = ()=> {
  const [scrollPos, setScrollPos] = React.useState(0);
  const cabecalhoFixed = `${styles.cabecalho_fixed } ${styles.cabecalho }`
  const cabecalhoNormal =  styles.cabecalho 
  const cabecalhoOculto = `${styles.cabecalho_oculto } ${styles.cabecalho }`
  const [cabecalho, setCabecalho] = React.useState(cabecalhoNormal)

  React.useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollPos(currentScrollPos);
      if(currentScrollPos < 1){
        setCabecalho(cabecalhoNormal)
      }
      else if(currentScrollPos > prevScrollPos) {
        // Rolando para baixo
        setCabecalho(cabecalhoOculto)
      } else {
        // Rolando para cima
        setCabecalho(cabecalhoFixed)
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos]);

  return (
    <header className={cabecalho}>
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
              <a href="/galeria" >
                Galeria
              </a>
            </li>
            <li className={styles.navBar_li}>
              <a href="/empresa" >
              Sobre Nós
              </a>
            </li>
            <li className={styles.navBar_li}>
              <a href="/contatos" >
                Entre em contato
              </a>
            </li>
            <img src={Logo} alt="Logo" className={styles.logoMenu} />
          </ul>
          
        </nav>
    </header>
  );
}

export default HeaderHome