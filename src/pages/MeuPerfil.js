import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import Header from '../components/Header'

const MeuPerfil = () => {
  const navigate = useNavigate()
  return (
    <div className="container">
      <Header />
      <h1>Meu perfil</h1>
      <div className="boxLogin">
        <h2>Apagar Conta</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input"
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          className="input"
        />
        <div className="row">
          <Button
            txt="Apagar Conta"
            onClick={() => navigate(`${process.env.PUBLIC_URL}/`)}
          />
        </div>
      </div>
    </div>
  )
}

export default MeuPerfil
