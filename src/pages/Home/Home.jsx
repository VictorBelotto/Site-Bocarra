import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Carrossel from './Carrossel/Carrossel'
import Historia from './Historia/Historia'

const Home = ()=> {
  return (
 <div>
   <Header/>
    <Carrossel/>
    <Historia/>
   <Footer/>
 </div>
  )
}

export default Home