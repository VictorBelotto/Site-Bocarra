import React from 'react'
import Carrossel from './Carrossel/Carrossel'
import Servicos from '../../components/Processos/Servicos'
import Parceiros from '../../components/Parceiros/Parceiros'
import Galeria from './Galeria/Galeria'

const Home = ()=> {
  return (
 <>
    <Carrossel/>
    <Galeria/>
    <Servicos/>
    <Parceiros/>
 </>
  )
}

export default Home