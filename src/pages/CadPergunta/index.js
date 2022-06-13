import React from 'react'
import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { postQuestion } from '../../services/questions'
import { getCurrentUser } from '../../services/users'
import './styles.css'

const CadPergunta = () => {
  const navigate = useNavigate()
  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target

    const { id } = getCurrentUser()
    const data = {
      usuarioId: id,
      palavrasChave: form[0].value,
      texto: form[1].value
    }
    const { status } = await postQuestion(data)
    if (status === 201) {
      navigate(`${process.env.PUBLIC_URL}/inicio`)
    }
  }
  return (
    <div className="container">
      <Header />
      <h1>Cadastrar Pergunta</h1>

      <form className="form" onSubmit={handleSubmit}>
        <h3 className="title">Palavra chave</h3>
        <input />
        <h3 className="title">Descricão</h3>
        <textarea className="textarea"></textarea>

        <Button type="submit" txt="Enviar" />
      </form>
    </div>
  )
}

export default CadPergunta
