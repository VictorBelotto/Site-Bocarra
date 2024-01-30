import react from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Projetos from './pages/Galeria/Projetos.jsx'
import Empresa from './pages/Empresa/Empresa.jsx'
import Contatos from './pages/Contatos/Contatos.jsx'
import PaginaBase from './pages/PaginaBase.jsx'


const AppRoutes = ()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaBase/>}>
          <Route index element={<Home/>} />
          <Route path='/galeria' element={<Projetos/>}/>
          <Route path='/empresa' element={<Empresa/>}/>
          <Route path='/contatos' element={<Contatos/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes