import api from './api'

const login = async parameters => {
  try {
    const resp = await api.post('/login/token-acesso', parameters)
    return resp.data
  } catch (except) {
    console.log(except)
    return {}
  }
}
export { login }
