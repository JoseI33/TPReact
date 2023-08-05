import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Error from './Error/Error'

function routerP() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
  )
}

export default routerP