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
              <img src={logoX} className="w-8 h-8 fill-current text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" alt="Reddit" />
            </a>

            <a href="#" className="mx-2" aria-label="Facebook">
              <img src={logoIG} className="w-8 h-8 fill-current text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" alt="Facebook" />
            </a>

            <a href="#" className="mx-2" aria-label="Github">
              <img src={logoFB} className="w-8 h-8 fill-current text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" alt="Github" />
            </a>

            <a href="#" className="mx-2" aria-label="Facebook">
              <img src={logoIG} className="w-8 h-8 fill-current text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" alt="Facebook" />
            </a>

          </div>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center">
            <div>
              <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
              <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Company</a>
              <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Community</a>
              <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</a>
            </div>

            <div>
              <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
              <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tech</a>
              <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</a>
              <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</a>
            </div>

            <div>
              <h3 className="text-gray-700 uppercase dark:text-white">Products</h3>
              <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Mega Cloud</a>
              <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Aperion UI</a>
              <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Meraki UI</a>
            </div>

            <div>
              <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+1 526 654 8965</span>
              <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">example@email.com</span>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-500 dark:text-gray-400">© Brand 2020 - All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer