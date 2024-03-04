import logosSena from "../image/sena.png"
import logoIG from "../image/rage.jpg"
import logoX from "../image/logoX.png"
import logoFB from "../image/logoFacebook.png"

const Footer = () => {
  return(
    <footer className="bg-black py-8 bottom-0 left-0 right-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-white text-3xl font-bold mb-2">RPM</h2>
          <div className="flex flex-col">
            <a href="#" className="text-gray-300 hover:text-white">Nosotros</a>
            <a href="#" className="text-gray-300 hover:text-white">&#191;Qui&#233;nes Somos&#63;</a>
            <a href="#" className="text-gray-300 hover:text-white">Nuestro Equipo</a>
            <a href="#" className="text-gray-300 hover:text-white">Experiencias</a>
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-white text-3xl font-bold mb-4">Síguenos</h2>
            <div className="flex">
              <a href="#"><img src={ logoIG } className="h-14 md:h-10"/></a>
              <a href="#"><img src={ logoX } className="h-14 md:h-10"/></a>
              <a href="#"><img src={ logoFB } className="h-14 md:h-10"/></a>
            </div>
        </div>
          <img src={ logosSena } className="h-14 md:h-16" />
      </div>
    </footer>
  )
}

export default Footer