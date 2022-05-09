import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <NavLink to={'/inicial'}>Lista de Perguntas</NavLink>
      <NavLink to={'/cadastrar-pergunta'}>Cadastrar Pergunta</NavLink>
      <NavLink to={'/meu-perfil'} className="float">
        Meu perfil
      </NavLink>
    </div>
  )
}

export default Header
