import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import axios from 'axios'

const Login = () => {
  const [users, setusers] = useState([])

  async function getlista() {
    try {
      const users = await axios.get('http://localhost:3001/usuario')
      setusers(users.data)
    } catch (error) {
      console.log(error)
    }
  }

  function validarusuario(evento) {
    evento.preventDefault()
    // console.log(evento.target[0].value)
    // console.log(evento.target[1].value)
    // console.log(users)
    for (let index = 0; index < users.length; index++) {
      if (
        evento.target[0].value === users[index].email &&
        evento.target[1].value === users[index].senha
      ) {
        // console.log(users[index])
        navigate('/inicial')
      }
    }
  }

  useEffect(() => {
    getlista()
  }, [])

  const navigate = useNavigate()
  return (
    <div className="containerLogin">
      <form onSubmit={validarusuario} className="boxLogin">
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
          <Button type="submit" txt="Entrar" />
          <Button txt="Cadastrar Novo" func={() => navigate('/cadastrar')} />
        </div>
      </form>
    </div>
  )
}

export default Login
