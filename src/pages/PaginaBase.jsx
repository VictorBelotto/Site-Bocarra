import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const PaginaBase = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header/>
        <main style={{ flex: 1}}>
          <Outlet/>
        </main>
      <Footer/>
    </div>
  )
}

export default PaginaBase