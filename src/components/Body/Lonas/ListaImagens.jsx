import React from 'react';
import styles from './ListaImagens.module.css';
import ImagensCircos from '../../../functions/exportImages';

const ListaImagens = () => {
  // Crie uma instância da classe ImagensCircos
  const imagensCircos = new ImagensCircos();

  const listaCircos = [
    {
      nome: 'Circo dos Sonhos',
      titulo: 'Circo dos Sonhos – Lona Tensionada de cupula redonda com 40,00m de diâmetro, marquise 25,00 X 35,00 com pintura exclusiva (ANO 2022)',
      imagens: imagensCircos.circoDosSonhos
    }
  ];

  return (
    <div className={styles.container}>
    <section className={styles.container_conteudo}>
      <h1 className={styles.titulo}>{listaCircos[0].titulo}</h1>
      <div className={styles.container_imagens}>
        {listaCircos[0].imagens.map((imagem, index) => (
          <img key={index} className={styles.imagens} src={imagem} alt="/" />
        ))}
      </div>
    </section>
  </div>
  
  );
}

export default ListaImagens;
