import React from 'react'
import { Inserir } from './Button'

function Form() {
  return (
    <div>
      <form>
        <label>
          Faça uma pergunta
          <input type="text" />
        </label>
      </form>
      <form>
        <label>
          Palavras Chaves
          <input type="text" />
        </label>
      </form>
      <Inserir txt="Cadastrar" />
    </div>
  )
}

export default Form
