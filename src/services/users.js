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
  console.log(user)
  return nome
}

export { getUserById, getUserByEmail, getAllUsers, searchUserById, getUserName }
