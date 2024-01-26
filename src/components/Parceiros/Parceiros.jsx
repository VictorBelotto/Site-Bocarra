import React from 'react'
import styles from './Parceiros.module.css'

const gallery = Object.values(import.meta.glob('/src/assets/images/logos_circos_parceiros/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }));
const logos = gallery.map((img) => img);

const Parceiros = () => {
  return (
    <section className={styles.mainContainer}>
      <h4>Parceiros</h4>
      <main className={styles.logosContainer}>
        {logos.map((logo) =>(
          <div key={logo} className={styles.logo}>
            <img src={logo} alt={`Logo ${logo}`} />
          </div>
        ))}
      <span></span>
      </main>
      
    </section>
  )
}

export default Parceiros