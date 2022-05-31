import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
