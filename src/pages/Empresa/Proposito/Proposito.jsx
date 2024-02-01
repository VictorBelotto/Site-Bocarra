import React from 'react'
import styles from './Proposito.module.css' 
import { GoArrowRight } from "react-icons/go";

const Proposito = () => {
  return (
    <main className={styles.container}>
      <h1>Princípios Fundamentais</h1>
      <section className={styles.containerProposito}> 
        <div className={styles.proposito}>
          <h2>Missão</h2>
          <p>
            Com base em três décadas de tradição circense, a Bocarra Circus tem como missão proporcionar a montagem impecável de eventos e coberturas de qualquer tamanho e formato.
            Comprometemo-nos a superar as expectativas dos nossos clientes, focando não apenas na estética visual, mas também na funcionalidade, oferecendo soluções de qualidade, elegância, agilidade e segurança.
          </p>
        </div>

        <div className={styles.proposito}>
          <h2>Visão</h2>
          <p>
            Buscamos, por meio de nossa vasta experiência e compromisso com a excelência, conquistar continuamente a satisfação dos nossos consumidores, ganhando sua confiança e fortalecendo parcerias duradouras.
            Nossa visão é tornar-se uma referência no mercado, crescendo e evoluindo junto com nossos clientes, para oferecer serviços cada vez melhores e mais adaptados às suas necessidades
          </p>
        </div>

        <div className={styles.proposito}>
          <h2>Valores</h2>
          <p>
            Tradição e Inovação: Manter nossas raízes na tradição circense enquanto buscamos inovações para oferecer soluções modernas.

            Compromisso com a Qualidade: Comprometimento em fornecer produtos e serviços de alta qualidade.

            Respeito à Tradição Familiar: Valorização da tradição familiar, honrando e preservando os valores transmitidos de geração em geração.
         </p>  
        </div>
      
      </section>
      <a href="/contatos">Entre em contato</a>
    </main>
  )
}

export default Proposito