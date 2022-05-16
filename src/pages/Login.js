import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import axios from 'axios'

const Login = () => {
  async function getlista() {
    try {
      const users = await axios.get('http://localhost:3001/usuario')
      console.log(users.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getlista()
  }, [])

  const navigate = useNavigate()
  return (
    <div className="containerLogin">
      <div className="boxLogin">
        <h1>Login</h1>
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
          <Button txt="Entrar" func={() => navigate('/inicial')} />
          <Button txt="Cadastrar Novo" func={() => navigate('/cadastrar')} />
        </div>
      </div>
    </div>
  )
}

export default Login
