import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cadastrar from './pages/Cadastrar'
import Home from './pages/Home'
import Login from './pages/Login'
import SinglePergunta from './pages/SinglePergunta'

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastrar" element={<Cadastrar />} />
      <Route path="/inicial" element={<Home />} />
      <Route path="/pergunta/:id" element={<SinglePergunta />} />
    </Routes>
  )
}

export default router
