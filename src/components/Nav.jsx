import { useState } from "react";
import { Link } from 'react-router-dom';
import LogoRPM from "../image/Home/pic_logoRPM.png"

const Nav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-amarillo">
      <div className="max-w-7xl p-6 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img className="h-14 w-auto" src={LogoRPM} alt="Logo de la empresa" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#servicios" className="font-semibold text-black hover:text-white transition duration-300 ease-in-out">Servicios</a>
              <a href="#quienesSomos" className="font-semibold text-black hover:text-white transition duration-300 ease-in-out">&#191;Qui&#233;nes Somos&#63;</a>
              <a href="#experiencias" className="font-semibold text-black hover:text-white transition duration-300 ease-in-out">Experiencias</a>
              <a href="#equipo" className="font-semibold text-black hover:text-white transition duration-300 ease-in-out">Nuestro Equipo</a>
            </div>
          </div>
          <button className="hidden md:block">
            <Link to="/login" className="font-semibold inline-block bg-blueDark hover:bg-blueLight hover:text-white text-white px-4 py-2 rounded-md transition duration-300 ease-in-out">Administrador</Link>
          </button>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-blueLight focus:outline-none focus:bg-blueDark focus:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden block">
          <div className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#servicios" className="block px-3 py-2 rounded-md text-lg text-black font-semibold hover:bg-amarillo">Servicios</a>
            <a href="#quienesSomos" className="block px-3 py-2 rounded-md text-lg text-black font-semibold hover:bg-amarillo">Quiénes Somos</a>
            <a href="#experiencias" className="block px-3 py-2 rounded-md text-lg text-black font-semibold hover:bg-amarillo">Experiencias</a>
            <a href="#equipo" className="block px-3 py-2 rounded-md text-lg text-black font-semibold hover:bg-amarillo">Nuestro Equipo</a>
          </div>
          <div className=" bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/login" className="block px-3 py-2 rounded-md text-lg font-medium text-white bg-blueDark hover:bg-blueLight">Administrador</Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Nav