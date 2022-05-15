import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const Cadastrar = () => {
  const navigate = useNavigate()
  return (
    <div className="containerLogin">
      <div className="boxLogin">
        <h1>Cadastro</h1>
        <input
          type="text"
          name="name"
          placeholder="Nome Completo"
          className="input"
        />
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
          <Button txt="Cadastrar" func={() => navigate('/')} />
          <Button txt="voltar" func={() => navigate('/')} />
        </div>
      </div>
    </div>
  )
}

export default Cadastrar
