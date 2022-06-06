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
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Login />} />
      <Route
        path={`${process.env.PUBLIC_URL}/cadastrar`}
        element={<Cadastrar />}
      />
      <Route path={`${process.env.PUBLIC_URL}/inicial`} element={<Home />} />
      <Route
        path={`${process.env.PUBLIC_URL}/pergunta/:id`}
        element={<SinglePergunta />}
      />
      <Route
        path={`${process.env.PUBLIC_URL}/cadastrar-pergunta`}
        element={<CadPergunta />}
      />
      <Route
        path={`${process.env.PUBLIC_URL}/meu-perfil`}
        element={<MeuPerfil />}
      />
    </Routes>
  )
}

export default router
