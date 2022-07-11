import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'

import { ToastContainer, toast } from 'react-toastify'
// import { getUserByEmail } from '../services/users'
import { login } from '../services/auth'

const Login = () => {
  const [email, setemail] = useState()
  const [password, setpassword] = useState()

  const validarusuario = async evento => {
    evento.preventDefault()

    const data = await login({ email, senha: password })
    if (data.token_acesso) {
      localStorage.setItem('faq@token', data.token_acesso)
    } else {
      toast.error('Não foi possivel realizar login!')
    }
    // console.log(data)
    // if (data.length > 0) {
    //   const user = data[0]

    //   if (user.email === email && user.senha === password) {
    //     localStorage.setItem('faq@user', JSON.stringify(user))
    //     navigate(`${process.env.PUBLIC_URL}/inicio`)
    //   } else {
    //     toast.error('Falha no login! senha incorreta!')
    //   }
    // } else {
    //   toast.error('Falha no login! email não cadastrado!')
    // }
  }

  const navigate = useNavigate()
  return (
    <div className="containerLogin">
      <ToastContainer />
      <form onSubmit={validarusuario} className="boxLogin">
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input"
          value={email}
          onChange={evento => {
            setemail(evento.target.value)
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          className="input"
          value={password}
          onChange={evento => {
            setpassword(evento.target.value)
          }}
        />
        <div className="row">
          <Button type="submit" txt="Entrar" />
        </div>
        <div className="row">
          <a
            style={{
              textDecoration: 'underline',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
            txt="Cadastre-se"
            onClick={() => navigate(`${process.env.PUBLIC_URL}/cadastrar`)}
          >
            Cadastre-se
          </a>
          <p
            style={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            Ainda não é um usuário?
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
