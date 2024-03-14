import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
// import Rutas from './pages/Rutas/Rutas'
// import Users from './pages/Users/Users'
import Login from './components/Login'
// import Gasolina from './pages/Gasoline/Gasoline'
import Preguntas from './pages/Pqrs/Pqrs'
// import Motos from './pages/Motos/Motos'
import { AuthProvider } from './context/authContext'
import { ProtectedRoute } from './protectedRoute'


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          {/* <Route path="/rutas" element={<Rutas />} /> */}
          {/* <Route path="/users" element={<Users />} /> */}
          <Route path="/login" element={<Login />} />
          {/* <Route path="/gasolina" element={<Gasolina />} /> */}
          <Route path="/pqrs" element={<Preguntas />} />
          {/* <Route path="/motos" element={<Motos />}/> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
