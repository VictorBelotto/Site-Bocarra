import React from 'react'
import styles from './Formulario.module.css'
import InputTelefone from './inputTelefone/InputTelefone'

const Formulario = () => {
  return (
    <>

      <div className={styles.mainContainer}>
            <div className={styles.card}>
              <span className={styles.title}>Formulario de contato</span>
              <form className={styles.form}>

                <div className={styles.group}>
                  <input placeholder="‎" type="text" required />
                  <label htmlFor="name">Nome</label>
                </div>

                <div className={styles.group}>
                  <InputTelefone/>
                </div>

                <div className={styles.group}>
                  <input placeholder="‎" type="email" id="email" name="email" required />
                  <label htmlFor="email">E-mail</label>
                </div>

                <div className={styles.group}>
                  <textarea placeholder="‎" id="comment" name="comment" rows="5" required />
                  <label htmlFor="comment">Mensagem</label>
                </div>
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
    </>
  )
}

export default Formulario