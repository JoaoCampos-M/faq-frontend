import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cadastrar from './pages/Cadastrar'
import CadPergunta from './pages/CadPergunta/CadPergunta'
import Home from './pages/Home'
import Login from './pages/Login'
import MeuPerfil from './pages/MeuPerfil'
import SinglePergunta from './pages/ViewPergunta/SinglePergunta'

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastrar" element={<Cadastrar />} />
      <Route path="/inicial" element={<Home />} />
      <Route path="/pergunta/:id" element={<SinglePergunta />} />
      <Route path="/cadastrar-pergunta" element={<CadPergunta />} />
      <Route path="/meu-perfil" element={<MeuPerfil />} />
    </Routes>
  )
}

export default router
