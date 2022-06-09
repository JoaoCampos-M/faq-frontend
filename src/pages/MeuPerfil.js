import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import Header from '../components/Header'
import { ToastContainer, toast } from 'react-toastify'
import { deleteUser } from '../services/users'

const MeuPerfil = () => {
  const nav = useNavigate()
  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target

    const data = {
      email: form[0].value,
      senha: form[1].value
    }

    const status = await deleteUser(data)
    if (status) {
      toast.success('Usuário deletado')
      nav(`${process.env.PUBLIC_URL}/`)
    }
  }
  return (
    <div className="container">
      <Header />
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h1>Meu perfil</h1>
        <div className="boxLogin">
          <h2>Apagar Conta</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            className="input"
            required
          />
          <div className="row">
            <Button type="submit" txt="Apagar Conta" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default MeuPerfil
