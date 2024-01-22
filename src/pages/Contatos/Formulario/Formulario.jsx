import React, { useState } from 'react';
import styles from './Formulario.module.css';
import InputTelefone from './inputTelefone/InputTelefone';
import emailjs from '@emailjs/browser'

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleTelefoneChange = (value) => {
    setTelefone(value); 
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMensagemChange = (e) => {
    setMensagem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    const templateParams ={
      from_name: nome,
      message:mensagem,
      email: email,
      telefone: telefone
    }
    console.log('Dados do formulário:', templateParams);
    emailjs.send("service_eql1imr", "template_3pphr1d", templateParams, "RDLWamZqO7vQAXuRs").then((response) => {
      console.log("Email enviado", response.status, response.text)
      setEmail('');
      setMensagem('');
      setNome('');
      setTelefone('');
    }, (err) => {
      console.log("Erro: ", err)
    })
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.card}>
          <span className={styles.title}>Formulário de contato</span>
          <form className={styles.form} onSubmit={handleSubmit}>

            <div className={styles.group}>
              <input
                placeholder="‎"
                type="text"
                value={nome}
                onChange={handleNomeChange}
                required
              />
              <label htmlFor="name">Nome</label>
            </div>

            <div className={styles.group}>
              <InputTelefone 
                  onChange={handleTelefoneChange}
              />
            </div>

            <div className={styles.group}>
              <input
                placeholder="‎"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <label htmlFor="email">E-mail</label>
            </div>

            <div className={styles.group}>
              <textarea
                placeholder="‎"
                id="message"
                name="message"
                rows="5"
                value={mensagem}
                onChange={handleMensagemChange}
                required
              />
              <label htmlFor="message">Mensagem</label>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Formulario;
