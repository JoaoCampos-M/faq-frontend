import api from './api'

const getAllQuestions = async () => {
  try {
    const response = await api.get('/perguntas')
    return response.data
  } catch (err) {
    console.log(err)
    return []
  }
}

const postQuestion = async data => {
  try {
    const response = await api.get('/perguntas', data)
    return response.data
  } catch (err) {
    console.log(err)
    return []
  }
}

export { getAllQuestions, postQuestion }
