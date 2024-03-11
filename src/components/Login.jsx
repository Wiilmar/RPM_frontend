import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext.jsx";
import { useNavigate } from "react-router-dom";
import React, {useEffect} from "react";
const LoginAdmin = () => {
  // eslint-disable-next-line no-unused-vars
  const { register, handleSubmit, formState: { errors } } = useForm()

  const { singin, isAuth } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) navigate('/dashboard')
  }, [isAuth])

  const onSubmit = handleSubmit(async (values) => {
    singin(values)
  })

  return (
    <>
    <form onSubmit={onSubmit}>
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(to right, #000814, #E0F4FF)' }}>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col" style={{ backgroundColor: '#FFFFFF', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Inicio sesión - Administrador</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Nombre de usuario</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Nombre de usuario" {...register("username", {required:true})} />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password"> Contraseña </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Contraseña" {...register("password", {required:true})} />
          </div>

          <div className="flex items-center justify-center">
            <div className="flex">
              <Link to="/" className="mr-12">
                <button className="bg-blueDark hover:bg-blueLight hover:text-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Cerrar</button>
              </Link>

              {/* <Link to="/dashboard"> */}
                <button className="bg-blueDark hover:bg-blueLight hover:text-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer" type="submit">Iniciar sesión</button>

              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
      </form>
    </>
  )
}

export default LoginAdmin