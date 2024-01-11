import react from 'react'
import Home from './pages/PaginaHome/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PaginaProjetos from './pages/PaginaProjetos/PaginaProjetos.jsx'


const AppRoutes = ()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/projetos' element={<PaginaProjetos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes