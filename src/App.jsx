//Cosas importantes para que funcione
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/authContext'
import { ProtectedRoute } from './protectedRoute'
// import { DownloadProvider } from './context/DownloadContext';

//Importes de componentes
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './components/Login'
import Preguntas from './pages/Pqrs/Pqrs'
import TermsAndConditions from './components/TermsAndConditions'
import Page404 from './components/Page404'


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* <DownloadProvider>  */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/pqrs" element={<Preguntas />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        {/* </DownloadProvider> */}
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
