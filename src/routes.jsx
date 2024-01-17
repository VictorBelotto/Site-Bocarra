import react from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Projetos from './pages/Projetos/Projetos.jsx'
import Empresa from './pages/Empresa/Empresa.jsx'
import Contatos from './pages/Contatos/Contatos.jsx'


const AppRoutes = ()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='projetos' element={<Projetos/>}/>
        <Route path='empresa' element={<Empresa/>}/>
        <Route path='contatos' element={<Contatos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes