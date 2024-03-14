import logosSena from "../image/sena.png"
import logoIG from "../image/logoIG.png"
import logoX from "../image/logoxd.png"
import logoFB from "../image/logofb.png"

const Footer = () => {
  return(
    <footer className="bg-black py-8 bottom-0 left-0 right-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-white text-3xl font-bold mb-2">RPM</h2>
          <div className="flex flex-col">
            <a href="#" className="text-gray-300 text-xl hover:text-white">Nosotros</a>
            <a href="#" className="text-gray-300 text-xl hover:text-white">&#191;Qui&#233;nes Somos&#63;</a>
            <a href="#" className="text-gray-300 text-xl hover:text-white">Nuestro Equipo</a>
            <a href="#" className="text-gray-300 text-xl hover:text-white">Experiencias</a>
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-white text-3xl font-bold mb-4">Síguenos</h2>
          <div className="flex">
            <a href="#" className="mr-4"><img src={logoIG} className="h-10 md:h-8"/></a>
            <a href="#" className="mr-4"><img src={logoX} className="h-10 md:h-8"/></a>
            <a href="#"><img src={logoFB} className="h-10 md:h-8"/></a>
          </div>
        </div>
          <img src={ logosSena } className="h-16 " />
      </div>
    </footer>
  )
}

export default Footer