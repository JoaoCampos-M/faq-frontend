import api from './api'

const getAnswerById = async id => {
  try {
    const response = await api.get('/respostas?perguntaId=' + id)
    return response.data
  } catch (err) {
    console.log(err)
    return []
  }
}

export { getAnswerById }
