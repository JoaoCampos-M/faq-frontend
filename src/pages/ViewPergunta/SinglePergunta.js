import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import './styles.css'

const SinglePergunta = () => {
  const { id } = useParams()
  return (
    <div className="container">
      <Header />
      <h1>{id}</h1>
      <p className="teste">
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsumom
      </p>

      {/* <textarea className="textarea">asdasd</textarea> */}
    </div>
  )
}

export default SinglePergunta
