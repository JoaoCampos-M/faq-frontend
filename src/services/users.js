import { toast } from 'react-toastify'
import api from './api'

const getUserById = async id => {
  try {
    const response = await api.get('/usuarios?id=' + id)
    return response.data
  } catch (err) {
    console.log(err)
    return []
  }
}

const postUser = async data => {
  try {
    const result = await getUserByEmail(data.email)
    console.log(result)
    console.log(data)
    if (result.length > 0) {
      return toast.info('Email já cadastrado :(')
    } else {
      const response = await api.post('/usuarios', data)
      return response.status
    }
  } catch (err) {
    console.log(err)
    return 'Falha ao realizar cadastro :('
  }
}

const getUserByEmail = async email => {
  try {
    const response = await api.get('/usuarios?email=' + email)
    return response.data
  } catch (err) {
    console.log(err)
    return []
  }
}

const getAllUsers = async () => {
  try {
    const response = await api.get('/usuarios')
    return response.data
  } catch (err) {
    console.log(err)
    return []
  }
}

const searchUserById = (id, data) => {
  let user = {}
  data.forEach(item => {
    if (item.id === id) {
      user = item
    }
  })
  return user
}

const getUserName = user => {
  const { nome } = user
  return nome
}

const getCurrentUser = () => {
  let user = {}
  if (localStorage.getItem('faq@user')) {
    user = JSON.parse(localStorage.getItem('faq@user'))
    return user
  } else {
    return undefined
  }
}

export {
  getCurrentUser,
  getUserById,
  getUserByEmail,
  getAllUsers,
  searchUserById,
  getUserName,
  postUser
}
