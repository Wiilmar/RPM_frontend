import { useState } from "react";
import  Logo from "../image/a.png"


const Nuevo = () => {



    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
        <header className="bg-amarillo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
              <img className="h-14 w-auto" src={Logo} alt="Logo de la empresa" />
                
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="font-semibold text-black hover:text-white transition duration-300 ease-in-out">Servicios</a>
                <a href="#" className="font-semibold text-black hover:text-white transition duration-300 ease-in-out">Quiénes Somos</a>
                <a href="#" className="font-semibold text-black hover:text-white transition duration-300 ease-in-out">Experiencias</a>
                <a href="#" className="font-semibold text-black hover:text-white transition duration-300 ease-in-out">Nuestro Equipo</a>
              </div>
            </div>
            <button className="hidden md:block">
              <a href="#" className=" font-semibold inline-block bg-boton hover:bg-azul hover:text-white text-white px-4 py-2 rounded-md transition duration-300 ease-in-out">Iniciar Sesión</a>
            </button>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-boton hover:text-white hover:bg-boton focus:outline-none focus:bg-boton focus:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden block">
            <div className="bg-blanconotanblanco px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-base text-black font-semibold hover:bg-amarillo">Servicios</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base text-black font-semibold hover:bg-amarillo">Quiénes Somos</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base text-black font-semibold hover:bg-amarillo">Experiencias</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-semibold text-blackfont-semibold hover:bg-amarillo">Nuestro Equipo</a>
            </div>            
            <div className=" bg-blanconotanblanco px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-boton">Iniciar Sesión</a>
            </div>
          </div>
        )}
      </header>
    )
}

export default Nuevo