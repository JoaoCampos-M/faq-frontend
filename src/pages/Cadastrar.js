import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { postUser } from '../services/users'
import { ToastContainer, toast } from 'react-toastify'

const Cadastrar = () => {
  const [nome, setnome] = useState('')
  const [email, setemail] = useState('')
  const [senha, setsenha] = useState('')

  const nav = useNavigate()
  const handleSubmit = async e => {
    e.preventDefault()

    const data = {
      nome,
      email,
      senha
    }
    const status = await postUser(data)
    if (status === 201) {
      toast.success('Cadastro realizado :)')
      nav(`${process.env.PUBLIC_URL}/`)
    }
  }
  function alterarNome(altername) {
    setnome(altername.target.value)
  }

  function alterarEmail(altermail) {
    setemail(altermail.target.value)
  }

  function alteraraSenha(alterpass) {
    setsenha(alterpass.target.value)
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
          onChange={alterarNome}
          value={nome}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input"
          required
          onChange={alterarEmail}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          className="input"
          required
          onChange={alteraraSenha}
          value={senha}
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
