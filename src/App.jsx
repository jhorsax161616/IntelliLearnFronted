import { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Salas from './Salas'
import Register from './Register'
import Home from './Home'
import Login from './Login'
import { UserProvider } from './UserContext'


function App() {

  return (
    <UserProvider>
    <Router>
      <div className="app-container">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="salas" element={<Salas />} />
            {/* <Route path="/create-sala" component={CreateSala} /> */}
            <Route path="register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
    </UserProvider>
  )
}

export default App
