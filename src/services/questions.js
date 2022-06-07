import api from './api'
import { toast } from 'react-toastify'
const getAllQuestions = async () => {
  try {
    const response = await api.get('/perguntas')
    return response.data.reverse()
  } catch (err) {
    console.log(err)
    return []
  }
}

const postQuestion = async data => {
  try {
    const response = await api.post('/perguntas', data)
    return {
      status: response.status,
      resp: toast.success('Cadastro realizado')
    }
  } catch (err) {
    console.log(err)
    return []
  }
}

export { getAllQuestions, postQuestion }
