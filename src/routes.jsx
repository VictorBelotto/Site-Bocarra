import react from 'react'
import Home from './pages/Home/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projetos from './pages/Projetos/Projetos.jsx'


const AppRoutes = ()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/projetos' element={<Projetos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes