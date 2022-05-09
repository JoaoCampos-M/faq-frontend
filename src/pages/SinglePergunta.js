import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'

const SinglePergunta = () => {
  const { id } = useParams()
  return (
    <div className="container">
      <Header />
      <h1>{id}</h1>
    </div>
  )
}

export default SinglePergunta
