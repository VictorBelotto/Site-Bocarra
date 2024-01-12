import react from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Projetos from './pages/Projetos/Projetos.jsx'
import Empresa from './pages/Empresa/Empresa.jsx'


const AppRoutes = ()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/projetos' element={<Projetos/>}/>
        <Route path='/empresa' element={<Empresa/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes