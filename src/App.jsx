import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Rutas from './pages/Rutas/Rutas'
import Users from './pages/Users/Users'
import Nuevo from './components/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rutas" element={<Rutas />} />
        <Route path="/users" element={<Users />} />
        <Route path="/admin" element={<Nuevo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
