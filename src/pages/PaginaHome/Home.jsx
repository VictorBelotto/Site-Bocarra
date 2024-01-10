import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ListaImagens from '../../components/Body/Lonas/ListaImagens'
import Video from '../../components/Body/Videos/Video'
import Carrossel from '../../components/Body/Carrossel/Carrossel'

const Home = ()=> {
  return (
 <div>
   <Header/>
   <Carrossel/>
   <ListaImagens/>
   <Footer/>
 </div>
  )
}

export default Home