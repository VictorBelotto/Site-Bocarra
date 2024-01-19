import imagensCircoDosSonhos from '../../../functions/exportImagesCircos/imagensCircoDosSonhos';
import imagensCircoFantastico from '../../../functions/exportImagesCircos/imagensCircoFantastico';
import imagensCircoRamito from '../../../functions/exportImagesCircos/imagensCircoRamito';


const listaCircos = [
  {
    titulo: 'Circo dos Sonhos',
    descricao: 'Lona Tensionada de cupula redonda com 40,00m de diâmetro, marquise 25,00 X 35,00 - (2022)',
    imagens: imagensCircoDosSonhos.circoDosSonhos
  },

  {
    titulo: 'Circo Fantástico',
    descricao: 'Lona tensionada de cupula redonda com 38,00m diâmetro, marquise 10 x 10 - (2019)',
    imagens: imagensCircoFantastico.circoFantastico
  },
  
  {
    titulo: 'Circo Ramito',
    descricao: 'Lona tensionada de cupula tradicional com 34,00m de diâmetro e 8 Mastareus - (2017)',
    imagens: imagensCircoRamito.circoRamito
  }
];


export default listaCircos;