import React from 'react'
import styles from './Proposito.module.css' 

const Proposito = () => {
  return (
    <main className={styles.container}>
      <section className={styles.containerProposito}>
        <h2>Nossa missão, visão e valores</h2>
        <div className={styles.proposito}>
          <h3>Missão</h3>
          <p>
            &nbsp;Com base em três décadas de tradição circense, a Bocarra Circus tem como missão proporcionar a montagem impecável de eventos e coberturas de qualquer tamanho e formato.
          </p>
          <p> 
            &nbsp;Comprometemo-nos a superar as expectativas dos nossos clientes, focando não apenas na estética visual, mas também na funcionalidade, oferecendo soluções de qualidade, elegância, agilidade e segurança.
          </p>
        </div>

        <div className={styles.proposito}>
          <h3>Visão</h3>
          <p>
            &nbsp; Buscamos, por meio de nossa vasta experiência e compromisso com a excelência, conquistar continuamente a satisfação dos nossos consumidores, ganhando sua confiança e fortalecendo parcerias duradouras.
          </p>
          <p> 
           &nbsp;Nossa visão é tornar-se uma referência no mercado, crescendo e evoluindo junto com nossos clientes, para oferecer serviços cada vez melhores e mais adaptados às suas necessidades
          </p>
        </div>

        <div className={styles.proposito}>
          <h3>Valores</h3>
          <p>
          &nbsp;<span>Tradição e Inovação:</span> Manter nossas raízes na tradição circense enquanto buscamos inovações contínuas para evoluir e oferecer soluções modernas.
          </p>
          <p>
          &nbsp;<span>Compromisso com a Qualidade:</span> Comprometimento em fornecer produtos e serviços de alta qualidade, assegurando a satisfação e confiança dos clientes.
          </p>
          <p>
            &nbsp;<span>Respeito à Tradição Familiar:</span> Valorização da tradição familiar, honrando e preservando os valores transmitidos de geração em geração.
          </p>
          <p>
           &nbsp;<span>Foco no Cliente:</span> Colocar as necessidades e expectativas dos clientes no centro de todas as operações, buscando sempre superar suas expectativas.
          </p>
          <p>
           &nbsp;<span>Crescimento Sustentável:</span> Buscar um crescimento sustentável, fortalecendo relações comerciais e contribuindo positivamente para a comunidade circense e eventos.
          </p>
          <p>
           &nbsp;Esses valores refletem a ênfase na tradição, qualidade, respeito, foco no cliente e crescimento sustentável, que são fundamentais para a identidade e sucesso a longo prazo da Bocarra Circus.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Proposito