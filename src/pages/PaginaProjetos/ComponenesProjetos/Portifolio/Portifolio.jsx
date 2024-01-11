import React from 'react'
import styles from './Portifolio.module.css';
import ImagensCircos from '../../../../functions/exportImages';
import Logo from '/Logo.png'

const Portifolio = () => {
  const imagensCircos = new ImagensCircos();

  const listaCircos = [
    {
      titulo: 'Circo dos Sonhos',
      descricao: 'Lona Tensionada de cupula redonda com 40,00m de diâmetro, marquise 25,00 X 35,00 com pintura exclusiva - (2022)',
      imagens: imagensCircos.circoDosSonhos
    }
  ];

  return (
    <div className={styles.mainContainer}>
       <div className={styles.containerTitulo}>
        <span><img src={Logo} alt="Logo Bocarra" style={{width: '50px', padding: '5px'}} /></span>
        <h1>Nossos Projetos</h1>
        <span className={styles.linhaDetalhe}></span>
       </div>

      <section className={styles.container_conteudo}>
        <div className={styles.container_imagens}>
          {listaCircos[0].imagens.map((imagem, index) => (
            <img key={index} className={styles.imagens} src={imagem} alt="/" />
          ))}
        </div>
        <div className={styles.containerDescricao}>
          <h3>{listaCircos[0].titulo}</h3>  
          <span className={styles.linhaDetalhe}></span>
          <p>{listaCircos[0].descricao}</p>
        </div>
      </section>
    </div>
  
  );
}

export default Portifolio