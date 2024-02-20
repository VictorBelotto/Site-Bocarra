import imagensCircoDosSonhos from '../../../functions/exportImagesCircos/imagensCircoDosSonhos';
import imagensCircoFantastico from '../../../functions/exportImagesCircos/imagensCircoFantastico';
import imagensCircoRamito from '../../../functions/exportImagesCircos/imagensCircoRamito';


const listaCircos = [

  {
    titulo: 'Circo Fantástico',
      descricao: {
        lonaPrincipal: {
          dimencao : '30m de diâmetro',
          cupula : 'Redonda', 
          modelo : 'Tradicional'
        },
        marquise: {
          dimencao: '20m x 12m',
          modelo: 'Dois bicos'
        },
        infoGeral: {
          corInterna: 'Azul c/ estrelas',
          corExterna: 'Azul, vermelho e branco',
          layout: 'Padrão EUA'
        }
      },
    imagens: imagensCircoFantastico.circoFantastico
  },
  
  {
    titulo: 'Circo Ramito',
    descricao: {
      lonaPrincipal: {
        dimencao : '30m de diâmetro',
        cupula : 'Redonda', 
        modelo : 'Tradicional'
      },
      marquise: {
        dimencao: '20m x 12m',
        modelo: 'Dois bicos'
      },
      infoGeral: {
        corInterna: 'Azul c/ estrelas',
        corExterna: 'Azul, vermelho e branco',
        layout: 'Padrão EUA'
      }
    },
    imagens: imagensCircoRamito.circoRamito
  },
  {
    titulo: 'Circo dos Sonhos',
    descricao: {
      lonaPrincipal: {
        dimencao : '30m de diâmetro',
        cupula : 'Redonda', 
        modelo : 'Tradicional'
      },
      marquise: {
        dimencao: '20m x 12m',
        modelo: 'Dois bicos'
      },
      infoGeral: {
        corInterna: 'Azul c/ estrelas',
        corExterna: 'Azul, vermelho e branco',
        layout: 'Padrão EUA'
      }
    },
    imagens: imagensCircoDosSonhos.circoDosSonhos
  }
];


export default listaCircos;