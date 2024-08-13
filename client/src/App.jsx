import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import AddMovie from './pages/AddMovie'

const App = () => {
  return (
<Routes>
  <Route element={<Home/>} path='/'/>
  <Route element={<AddMovie/>} path='/add-movie'/>
</Routes>
  )
}

export default App