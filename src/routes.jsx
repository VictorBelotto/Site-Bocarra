import react from 'react'
import Home from './pages/PaginaHome/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const AppRoutes = ()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
