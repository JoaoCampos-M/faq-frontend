import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import Header from '../components/Header'
import { ToastContainer, toast } from 'react-toastify'
import { deleteUser, getCurrentUser } from '../services/users'

const MeuPerfil = () => {
  const nav = useNavigate()
  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target

    const data = {
      senha: form[0].value
    }
    const user = getCurrentUser()

    if (data.senha === user.senha) {
      const status = await deleteUser(user)
      if (status === 200) {
        toast.success('Usuário deletado')
        localStorage.removeItem('faq@user')
        nav(`${process.env.PUBLIC_URL}/`)
      }
    } else {
      toast.warn('Falha ao remover conta, senha incorreta!')
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
