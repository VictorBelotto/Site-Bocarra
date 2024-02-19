import React from 'react'
import styles from './Servicos.module.css'
import CardProcesso from '../CardProcesso/CardProcesso'
const Servicos = () => {
  return (
    <div className={styles.container}>
      <span className={styles.linhaDetalhe}></span>
        <div className={styles.bemVindo}>
          <span className={styles.linhaDetalhe}></span>
        </div >
      <span className={styles.linhaDetalhe}></span>
  
      <section className={styles.mainContainer}>
      <div className={styles.containerTitulo}>
        <h3>alguma coisa</h3> 
        <h1>Nosso Processo</h1>
      </div>
        <section>
          <main className={styles.containerCardProcesso}>
            <CardProcesso
              image='projeto'
              titulo='Projeto Personalizado'
              descricao='Com base nos requisitos levantados, criamos um projeto abrangente e personalizado. Nossa equipe utiliza programas de modelagem 3D para garantir precisão e inovação em cada detalhe.'
            />
            <CardProcesso
              image='montagem'
              titulo='Instalação Inicial'
              descricao='Realizamos a primeira instalação para garantir que tudo esteja dentro dos conformes. Nossa abordagem é proativa, visando resolver qualquer problema potencial antes mesmo de ocorrer.'
            />
            <CardProcesso
              image='montada'
              titulo='Compromisso com a qualidade'
              descricao='Desde o pedido inicial até as verificações pós-projeto, nosso compromisso é fornecer um serviço profissional abrangente. 
              Buscamos continuamente o mais alto nível de qualidade para cada projeto'
            />

          </main>
         
        </section>
        <a href="/contatos">Entre em contato</a>
        <span></span>
      </section>


    </div>  
  )
}

export default Servicos