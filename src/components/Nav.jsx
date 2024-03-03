export default function menu () {
    return(
        <>
        <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-white text-2xl font-bold">Mi Sitio</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">Inicio</a>
              <a href="#" className="text-gray-300 hover:text-white">Acerca de</a>
              <a href="#" className="text-gray-300 hover:text-white">Servicios</a>
              <a href="#" className="text-gray-300 hover:text-white">Contacto</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
        </>
    )
}