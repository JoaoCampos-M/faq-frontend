import api from './api'
import { getCurrentUser } from './users'

const getAnswerById = async id => {
  try {
    const response = await api.get('/respostas?perguntaId=' + id)
    return response.data
  } catch (err) {
    console.log(err)
    return []
  }
}

const postAnswer = async data => {
  try {
    const { id } = getCurrentUser()
    const body = { ...data, usuarioId: id }

    const response = await api.post('/respostas', body)
    return response.status
  } catch (err) {
    console.log(err)
    return 'Falha ao realizar cadastro :('
  }
}

export { getAnswerById, postAnswer }
