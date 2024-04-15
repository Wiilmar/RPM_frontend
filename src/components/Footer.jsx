import logoRPM from "../image/Home/logoprueba.png"
import logoIG from "../image/Home/pic_logoInstagram.png"
import logoX from "../image/Home/pic_logoX.png"
import logoFB from "../image/Home/pic_logoFacebook.png"

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container p-6 mx-auto">
        <div className="flex flex-col items-center">
          <div className="px-6 pt-6 text-center">
            <a href="#">
              <img className="w-auto h-14 mx-auto" src={logoRPM} alt="" />
            </a>

            <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Join 31,000+ others and never miss out on new tips, tutorials, and more.</p>
          </div>

          <div className="flex mt-6 mb-5 justify-center">
            <a href="#" className="mx-2" aria-label="Reddit">
              <img src={logoX} className="w-8 h-8 rounded-full transition-all duration-300 transform hover:scale-110" alt="Reddit" />
            </a>

            <a href="#" className="mx-2" aria-label="Facebook">
              <img src={logoIG} className="w-8 h-8 rounded-full transition-all duration-300 transform hover:scale-110" alt="Facebook" />
            </a>

            <a href="#" className="mx-2" aria-label="Github">
              <img src={logoFB} className="w-8 h-8 rounded-full transition-all duration-300 transform hover:scale-110" alt="Github" />
            </a>

            <a href="#" className="mx-2" aria-label="Facebook">
              <img src={logoIG} className="w-8 h-8 rounded-full transition-all duration-300 transform hover:scale-110" alt="Facebook" />
            </a>
          </div>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center">
            <div>
              <h3 className="text-gray-700 uppercase dark:text-white">Acerca de</h3>
              <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Nuestros servicios</a>
              <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Estadisticas</a>
              <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"></a>
            </div>

            <div>
              <h3 className="text-gray-700 uppercase dark:text-white">Redes sociales</h3>
              <a href="https://web.facebook.com/profile.php?id=61558147182570&locale=es_LA" target="_blank" rel="noopener noreferrer" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Facebook</a>
              <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Instagram</a>
              <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Twitter</a>
            </div>

            <div>
              <h3 className="text-gray-700 uppercase dark:text-white">Alianza</h3>
              <a href="https://devisitaporelmundo.com" target="_blank" rel="noopener noreferrer" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">De visita por el mundo</a>
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