import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from 'react';

//----- Importacion de imagenes
import pic_bgLogin from "../image/login/pic_bgLogin.jpg"
import pic_logoRPM from "../image/Home/pic_logoRPM.png"
import pic_logoSena from "../image/Home/pic_logoSena.png"

const LoginAdmin = () => {
  // eslint-disable-next-line no-unused-vars
  const { register, handleSubmit, formState: { errors } } = useForm()

  const { singin, isAuth } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) navigate('/dashboard')
  }, [isAuth, navigate])

  const onSubmit = handleSubmit(async (values) => {
    singin(values)
  })

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${pic_bgLogin})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="flex flex-col items-center justify-center h-full">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Inicio sesión <br /> Administrador</h2>
              <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Usuario</label>
                <div className="flex items-center border rounded overflow-hidden">
                  <input className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" type="text" htmlFor="username" placeholder="Ingresar usuario" maxLength={20} required {...register("username", { required: true })} />
                  <span className="px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 510 510" className="w-6 h-5" xmlSpace="preserve"><path fill="#000000" d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M255,76.5    c43.35,0,76.5,33.15,76.5,76.5s-33.15,76.5-76.5,76.5c-43.35,0-76.5-33.15-76.5-76.5S211.65,76.5,255,76.5z M255,438.6    c-63.75,0-119.85-33.149-153-81.6c0-51,102-79.05,153-79.05S408,306,408,357C374.85,405.45,318.75,438.6,255,438.6z" /></svg>
                  </span>
                </div>
              </div>

              <div className="mb-7 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Contraseña</label>
                <div className="flex items-center border rounded overflow-hidden">
                  <input className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" type={showPassword ? 'text' : 'password'} placeholder="Ingresar contraseña" htmlFor="password" maxLength={20} required  {...register("password", { required: true })} />
                  <button type="button" className="px-3 py-1 bg-gray-200" onClick={handleTogglePassword}>
                    <svg className="w-6 h-6 text-gray-600 transition-transform duration-300 transform hover:scale-110" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      {showPassword ? (
                        <>
                          <path className="text-gray-700" d="M20.722,24.964c0.096,0.096,0.057,0.264-0.073,0.306c-7.7,2.466-16.032-1.503-18.594-8.942c-0.072-0.21-0.072-0.444,0-0.655c0.743-2.157,1.99-4.047,3.588-5.573c0.061-0.058,0.158-0.056,0.217,0.003l4.302,4.302c0.03,0.03,0.041,0.072,0.031,0.113c-1.116,4.345,2.948,8.395,7.276,7.294c0.049-0.013,0.095-0.004,0.131,0.032C17.958,22.201,20.045,24.287,20.722,24.964z" />
                          <path className="text-gray-700" d="M24.68,23.266c2.406-1.692,4.281-4.079,5.266-6.941c0.072-0.21,0.072-0.44,0-0.65C27.954,9.888,22.35,6,16,6c-2.479,0-4.841,0.597-6.921,1.665L3.707,2.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l26,26c0.391,0.391,1.023,0.391,1.414,0c0.391-0.391,0.391-1.023,0-1.414L24.68,23.266z M16,10c3.309,0,6,2.691,6,6c0,1.294-0.416,2.49-1.115,3.471l-8.356-8.356C13.51,10.416,14.706,10,16,10z" />
                        </>
                      ) : (
                        <path className="text-gray-700" d="M29.946,15.675C27.954,9.888,22.35,6,16,6S4.046,9.888,2.054,15.675c-0.072,0.21-0.072,0.44,0,0.65C4.046,22.112,9.65,26,16,26s11.954-3.888,13.946-9.675C30.018,16.115,30.018,15.885,29.946,15.675z M16,22c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S19.309,22,16,22z" />
                      )}
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex">
                  <button className="bg-blueDark hover:bg-blueLight hover:text-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer" type="submit">Iniciar sesión</button>
                  <Link to="/" className="ml-12">
                    <button className="bg-blueDark hover:bg-blueLight hover:text-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Cerrar</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img src={ pic_logoRPM } alt="Imagen" className="absolute left-0 bottom-0 h-16 w-16 m-5" />
          <img src={ pic_logoSena } alt="Imagen" className="absolute right-0 bottom-0 h-16 w-16 m-5" />
        </div>
      </form>

    </>
  )
}

export default LoginAdmin