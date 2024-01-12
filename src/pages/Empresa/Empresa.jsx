import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Historia from './Historia/Historia'
import Servicos from './Servicos/Servicos'

const Empresa = () => {
  return (
    <>
    <Header/>
      <Historia/>
      <Servicos/>
    <Footer/>
    </>
  )
}

export default Empresa