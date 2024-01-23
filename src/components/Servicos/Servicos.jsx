import React from 'react'
import styles from './Servicos.module.css'
import { GoArrowRight } from "react-icons/go";
const Servicos = () => {
  return (
    <div className={styles.container}>
      <span className={styles.linhaDetalhe}></span>
        <div className={styles.bemVindo}>
          <span className={styles.linhaDetalhe}></span>
          <h2>
            Bem-Vindo à Bocarra Circus!
          </h2>
        </div >
      <span className={styles.linhaDetalhe}></span>
      <h2>Nossos Serviços</h2>

      <main className={styles.containerServicos}>
      <section className={styles.servico}>
        <h3>Levantamento de Requisitos</h3>
        <span className={styles.linhaDetalheServico}></span>
        <p>
          Iniciamos com um levantamento detalhado, discutindo material, metragem, estrutura e todas as especificações necessárias para garantir a perfeita adequação do projeto às necessidades do cliente.
        </p>
      </section>

      <section className={styles.servico}>
        <h3>Projeto Abrangente e Personalizado</h3>
        <span className={styles.linhaDetalheServico}></span>
        <p>
          Com base nos requisitos levantados, criamos um projeto abrangente e personalizado. Nossa equipe utiliza programas de modelagem 3D para garantir precisão e inovação em cada detalhe.
        </p>
      </section>

      <section className={styles.servico}>
        <h3>Compromisso com a Qualidade e Satisfação</h3>
        <span className={styles.linhaDetalheServico}></span>
        <p>
          Desde o pedido inicial até as verificações pós-projeto, nosso compromisso é fornecer um serviço profissional abrangente. Buscamos continuamente o mais alto nível de qualidade para cada projeto, valorizando ao máximo nossos clientes e adaptando nossos produtos para atender às suas necessidades individuais.
        </p>
      </section>

      <section className={styles.servico}>
        <h3>Instalação Inicial e Verificações</h3>
        <span className={styles.linhaDetalheServico}></span>
        <p>
          Realizamos a primeira instalação para garantir que tudo esteja dentro dos conformes. Nossa abordagem é proativa, visando resolver qualquer problema potencial antes mesmo de ocorrer.
        </p>
      </section>

      <section className={styles.servico}>
        <h3>Suporte Pós-Venda e Garantia Personalizada</h3>
        <span className={styles.linhaDetalheServico}></span>
        <p>
          Garantimos suporte pós-venda personalizado, proporcionando tranquilidade e confiança aos nossos clientes. Nossa garantia é adaptada ao modelo e material utilizados, assegurando a satisfação contínua.
        </p>
      </section>
      
      <a href="/contatos">Entre em contato conosco agora <GoArrowRight className={styles.icon}/></a>
      <span className={styles.linhaDetalheServico}></span>
      </main>
     

    </div>  
  )
}

export default Servicos