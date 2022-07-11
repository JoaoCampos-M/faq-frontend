import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

api.interceptors.request.use(
  config => {
    console.log(config)
    config.headers.Authorization = `${localStorage.getItem('faq@token')}`
    return config
  },
  except => {
    console.log(except)
  }
)

export default api
