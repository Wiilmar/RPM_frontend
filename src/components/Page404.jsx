import { Link } from 'react-router-dom';
import pic_404 from '../image/Home/pic_404.jpg'

const Page404 = () => {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                    <div className="w-full lg:w-1/2">
                        <p className="text-sm font-medium text-amarilloTitle">Error 404</p>
                        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Página no encontrada</h1>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">Lo sentimos, la página que estás buscando no ha sido encontrada. Puedes regresar a la página de inicio haciendo clic en este botón:</p>

                        <div className="flex items-center mt-6 gap-x-3">
                            <Link to="/" className="w-200 px-5 py-2 text-sm tracking-wide text-black transition-colors duration-200 bg-amarillo rounded-lg sm:w-auto hover:text-blueDark hover:bg-yellowLightTwo">
                                Regresar
                            </Link>
                        </div>

                    </div>

                    <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
                        <img className="w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover" src={ pic_404 } alt="Pagina web no encontrada" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page404