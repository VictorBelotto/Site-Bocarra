import React from 'react'
import Header from '../components/Header/Header'
import HeaderHome from '../components/HeaderHome/HeaderHome'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const PaginaBase = () => {
  const isPaginaHome = window.location.pathname === '/'; // ou outra lógica para verificar se está na Home
  const Cabecalho = isPaginaHome ? HeaderHome : Header;
  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>

      <Cabecalho/>
        <main style={{ flex: 1}}>
          <Outlet/>
        </main>
      <Footer/>
    </div>
  )
}

export default PaginaBase