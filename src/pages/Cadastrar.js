import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { postUser } from '../services/users'
import { ToastContainer, toast } from 'react-toastify'

const Cadastrar = () => {
  const nav = useNavigate()
  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target

    const data = {
      nome: form[0].value,
      email: form[1].value,
      senha: form[2].value
    }
    const status = await postUser(data)
    if (status === 201) {
      toast.success('Cadastro realizado :)')
      nav(`${process.env.PUBLIC_URL}/`)
    }
  }

  const navigate = useNavigate()
  return (
    <div className="containerLogin">
      <ToastContainer />
      <form className="boxLogin" onSubmit={handleSubmit}>
        <h1>Cadastro</h1>
        <input
          type="text"
          name="name"
          placeholder="Nome Completo"
          className="input"
          required
        />
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
          <Button txt="Cadastrar" type="submit" />
          <Button
            type="button"
            txt="voltar"
            onClick={() => navigate(`${process.env.PUBLIC_URL}/`)}
          />
        </div>
      </form>
    </div>
  )
}

export default Cadastrar
