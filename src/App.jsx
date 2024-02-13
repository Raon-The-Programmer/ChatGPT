import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Chat from './pages/Chat'
import Notfound from './pages/Notfound'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
 

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/404' element={<Notfound/>}/>
      </Routes>
      </div>
    
  )
}

export default App
