import React from 'react';
import styles from './CardProcesso.module.css';

const gallery = Object.values(import.meta.glob('/src/assets/images/card_processo/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }));
const imagens = gallery.map((img) => img);

function buscaImagem(image) {
  return imagens.find((e) => e.includes(image));
}

const CardProcesso = ({image, titulo, descricao }) => {
  const imagemEncontrada = buscaImagem(image);

  return (
    <>
      <div className={styles.container}>
        <div key={titulo} className={styles.containerImg}>
          {imagemEncontrada && <img src={imagemEncontrada} alt={`imagem ${titulo}`} />}
        </div>
        <div className={styles.containerDescricao}>
          <h3>{titulo}</h3>
          <p>{descricao}</p>
        </div>
      </div>
    </>
  );
};

export default CardProcesso;
