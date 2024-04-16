import logoRPM from "../image/Home/logoprueba.png"
import logoSena from "../image/Home/pic_logoSena.png"
import logoSennova from "../image/Home/pic_logoSennova.webp"
import logoDeVisitaPorElMundo from "../image/Home/pic_logoDVEM.png"
import logoDev from "../image/Home/pic_logoDev.png"

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container p-6 mx-auto">
        <div className="flex flex-col items-center">
          <div className="px-6 pt-6 text-center">
        
              <img className="w-auto h-14 mb-4 mx-auto" src={logoRPM} alt="" />
            

            <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Agradecemos el apoyo recibido. Sin ustedes, nuestro proyecto Rpm no habría sido posible. <br /> ¡Gracias por creer en nosotros!</p>
          </div>

          <div className="flex mt-6 mb-5 justify-center">
            <a href="https://web.facebook.com/CTPISENACauca/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className="mx-2" >
              <img src={logoSena} className="w-10 h-10 transition-all duration-300 transform hover:scale-110" />
            </a>

            <a href="https://www.sena.edu.co/es-co/formacion/paginas/tecnologia-innovacion.aspx" target="_blank" rel="noopener noreferrer" className="mx-2" >
              <img src={logoSennova} className="w-28 h-10  transition-all duration-300 transform hover:scale-110"  />
            </a>

            <a href="https://web.facebook.com/Devisitaporelmundo/?locale=es_LA&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className="mx-2" >
              <img src={logoDeVisitaPorElMundo} className="w-10 h-10  transition-all duration-300 transform hover:scale-110"  />
            </a>

              <img src={logoDev} className="w-10 h-11 ml-1 rounded-full transition-all duration-300 transform hover:scale-110" style={{ paddingTop: '-12px' }}  />
           
          </div>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 text-center">
            <div>
              <h3 className="text-gray-700 uppercase dark:text-white">Redes sociales</h3>
              <a href="https://web.facebook.com/profile.php?id=61558147182570&locale=es_LA" target="_blank" rel="noopener noreferrer" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Facebook</a>
              <a href="https://www.instagram.com/proyecto_rpm/" target="_blank" rel="noopener noreferrer" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Instagram</a>
              <a href="https://twitter.com/proyecto_rpm24" target="_blank" rel="noopener noreferrer" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Twitter</a>
            </div>

            <div>
              <h3 className="text-gray-700 uppercase dark:text-white">Alianza</h3>
              <a href="https://devisitaporelmundo.com" target="_blank" rel="noopener noreferrer" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">De visita por el mundo</a>
              <a href="https://www.instagram.com/xara_biker?igsh=MXI3d3p0OWhyMjV6Zg==" target="_blank" rel="noopener noreferrer" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Xara_Biker</a>
            </div>

            <div>
              <h3 className="text-gray-700 uppercase dark:text-white">Contactos</h3>
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+57 4238793 </span>
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+57 324 554 9821</span>
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">rpmescucha@gmail.com</span>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-500 dark:text-gray-400">© RPM 2024 - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer