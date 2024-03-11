import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Rutas from './pages/Rutas/Rutas'
import Users from './pages/Users/Users'
import Login from './components/Login'
import Gasolina from './pages/Gasoline/Gasoline'
import { AuthProvider } from '../context/authContext'


function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rutads" element={<Rutas />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gasolina" element={<Gasolina />} />        
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
