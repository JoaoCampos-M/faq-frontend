import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import api from '../services/api'
import { ToastContainer, toast } from 'react-toastify'

const Login = () => {
  const validarusuario = async evento => {
    evento.preventDefault()
    const response = await api.get('/usuarios?email=' + evento.target[0].value)
    if (response.data.length > 0) {
      const user = response.data[0]
      if (
        user.email === evento.target[0].value &&
        user.senha === evento.target[1].value
      ) {
        localStorage.setItem('faq@user', JSON.stringify(user))
        navigate('/inicial')
      } else {
        toast.error('Falha no login! Verifique sua senha!')
      }
    } else {
      toast.error('Falha no login! Verifique seu email!')
    }
  }

  useEffect(() => {
    // getlista()
  }, [])

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
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          className="input"
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
            onClick={() => navigate('/cadastrar')}
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
