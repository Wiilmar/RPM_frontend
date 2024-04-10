import { useState, } from 'react';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import './style.css';
import Pqrs from "../Pqrs/Pqrs"
import Users from '../Users/Users';
import Gasoline from '../Gasoline/Gasoline'
import Rutas from '../Rutas/Rutas'

//----- Importacion de imagenes
import logoRPM from "../../image/DashBoard/pic_logoRPM.png"



const Dashboard = () => {
  const [selectedCard, setSelectedCard] = useState('users');

  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black ">
      {/* Header */}
      <div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
        <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
          <img className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden" src={logoRPM} alt="Logo RPM" />
          <span className="hidden font-bold md:block">ADMIN</span>
        </div>
        <div className="flex justify-end items-center h-14 bg-blue-800 dark:bg-gray-800 header-right pr-3">
          <ul className="flex items-center">
            <li>
              <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
            </li>
            <li>
              <button onClick={handleLogout} href="#" className="flex items-center mr-4 hover:text-blue-100">
                <span className="inline-flex mr-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                  </svg>
                </span>
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* -------- */}
      {/* SideBar */}
      <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-blueDark h-full text-white transition-all duration-300 border-none z-10 sidebar">
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-bold tracking-wide text-gray-400 uppercase">Panel de Control</div>
              </div>
            </li>
            <li>
              <button
                onClick={() => setSelectedCard('users')}
                className={`relative flex flex-row items-center h-11 w-full focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6 $ {selectedCard === 'Dashboard' ? 'bg-blue-800 dark:bg-gray-600' : ''}`}>
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 510 510">
                    <path className="fill-current" d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M255,76.5 c43.35,0,76.5,33.15,76.5,76.5s-33.15,76.5-76.5,76.5c-43.35,0-76.5-33.15-76.5-76.5S211.65,76.5,255,76.5z M255,438.6 c-63.75,0-119.85-33.149-153-81.6c0-51,102-79.05,153-79.05S408,306,408,357C374.85,405.45,318.75,438.6,255,438.6z" />
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Usuarios</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedCard('gasolina')}
                className={`relative flex flex-row items-center h-11 w-full focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6 ${selectedCard === 'Board' ? 'bg-blue-800 dark:bg-gray-600' : ''}`}>
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <polygon points="25 13.59 25 9 20.41 9 25 13.59" className="fill-current" />
                    <path d="M12.4,12.52A4.32,4.32,0,0,0,13,17.2a3.79,3.79,0,0,0,4.25,1.16,4.31,4.31,0,0,0-.56-4.67A3.81,3.81,0,0,0,12.4,12.52Z" className="fill-current" />
                    <path d="M6.51,1.14a1,1,0,0,0-1.22.15l-4,4a1,1,0,0,0,0,1.42L3.56,9l6-6Z" className="fill-current" />
                    <path d="M28,3H12.36L5,10.34V26a5,5,0,0,0,5,5H26a5,5,0,0,0,5-5V6A3,3,0,0,0,28,3ZM20,26a1,1,0,0,1-2,0V24.93a13.77,13.77,0,0,0-.77-4.5,5.72,5.72,0,0,1-5.83-1.95,6.32,6.32,0,0,1-.6-7.25,1,1,0,0,1,.44-.4,5.77,5.77,0,0,1,6.91,1.57A6.33,6.33,0,0,1,19,19.29,15.48,15.48,0,0,1,20,24.93Zm7-10a1,1,0,0,1-.62.92A.84.84,0,0,1,26,17a1,1,0,0,1-.71-.29l-8-8a1,1,0,0,1-.21-1.09A1,1,0,0,1,18,7h8a1,1,0,0,1,1,1Z" className="fill-current" />
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate"> Gasolina </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedCard('rutas')}
                className={`relative flex flex-row items-center h-11 w-full focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6 ${selectedCard === 'Messages' ? 'bg-blue-800 dark:bg-gray-600' : ''}`}>
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M416 320h-96c-17.6 0-32-14.4-32-32s14.4-32 32-32h96s96-107 96-160-43-96-96-96-96 43-96 96c0 25.5 22.2 63.4 45.3 96H320c-52.9 0-96 43.1-96 96s43.1 96 96 96h96c17.6 0 32 14.4 32 32s-14.4 32-32 32H185.5c-16 24.8-33.8 47.7-47.3 64H416c52.9 0 96-43.1 96-96s-43.1-96-96-96zm0-256c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM96 256c-53 0-96 43-96 96s96 160 96 160 96-107 96-160-43-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">Rutas</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedCard('pqrs')}
                className={`relative flex flex-row items-center h-11 w-full focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6 ${selectedCard === 'Notifications' ? 'bg-blue-800 dark:bg-gray-600' : ''}`}>
                <span className="inline-flex justify-center items-center ml-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">P.Q.R.S.</span>
              </button>
            </li>

          </ul>
          <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">Rutas Para Moteros @2024</p>
        </div>
      </div>
      {/* -------- */}
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">

        {/* users */}
        {selectedCard === 'users' && (
          <Users />
        )}
        {/* gasolina */}
        {selectedCard === 'gasolina' && (
          <Gasoline />

        )}
        {/* gasolina */}
        {selectedCard === 'rutas' && (
          <Rutas />
        )}
        {/* -------- */}
        {/* PQRS */}
        {selectedCard === 'pqrs' && (
          <Pqrs />
        )}

        {/* -------- */}

      </div>
    </div>
  );
};

export default Dashboard;
