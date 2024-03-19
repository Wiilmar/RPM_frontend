//Cosas importantes para que funcione

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/authContext'
import { ProtectedRoute } from './protectedRoute'


//Importes de componentes
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './components/Login'
import Preguntas from './pages/Pqrs/Pqrs'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/pqrs" element={<Preguntas />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
