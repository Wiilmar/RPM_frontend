//----- Importacion de imagenes
import logoPS from '../image/Home/pic_logoPlayStore.png'
import logoApk from '../image/Home/pic_logoAndroid.png'
import pic_galleryA from '../image/Home/pic_galleryA.jpg'
import pic_galleryB from '../image/Home/pic_galleryB.jpeg'
import pic_galleryC from '../image/Home/pic_galleryC.jpg'
import pic_galleryD from '../image/Home/pic_galleryD.jpg'
import pic_galleryE from '../image/Home/pic_galleryE.jpg'
import pic_galleryF from '../image/Home/pic_galleryF.jpg'
import pic_bgGallery from '../image/Home/pic_bgGallery.jpg'

const Gallery = () => {
    return (
        <>
            <section className="text-gray-600 body-font" style={{
                backgroundImage: `url(${pic_bgGallery})`
            }}>
                <div className="container px-5 py-20 mx-auto">
                    <div id='download' className="flex flex-col text-center w-auto mb-9 bg-blueDark rounded-2xl">
                        <h1 className="sm:text-4xl text-4xl font-bold title-font mb-4 text-white pb-1 pt-10"> Únete a R.P.M. </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-justify pb-8 px-12 text-whiteDark">Descubre la aplicación de moto viajeros y explora el mundo en tu moto de manera emocionante. Planifica tus viajes eficientemente, encuentra rutas personalizadas y alojamiento acogedor. Conéctate con otros moto viajeros para compartir experiencias únicas y descubrir nuevos destinos fascinantes. ¡Descarga la aplicación ahora y vive la experiencia al máximo!</p>
                        <div className="flex justify-center mx-auto items-center flex-shrink-0 space-x-5 mb-9 bg-blueDark pb-5 px-6">
                            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-300 focus:outline-none">
                                <img src={logoPS} alt="Google Play" className="w-6 h-6" />
                                <span className="ml-4 flex items-start flex-col leading-none">
                                    <span className="text-xs text-gray-600 mb-1">Descargar</span>
                                    <span className="title-font font-medium">Play Store</span>
                                </span>
                            </button>
                            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-300 focus:outline-none">
                                <img src={logoApk} alt="Google Play" className="w-6 h-6" />
                                <span className="ml-4 flex items-start flex-col leading-none">
                                    <span className="text-xs text-gray-600 mb-1">Descargar</span>
                                    <span className="title-font font-medium">Apk</span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 md:w-1/2 sm:w-full p-4 w-full">
                            <div className="flex relative h-[500px] lg:h-[400px] sm:h-[300px] w-full">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={pic_galleryA} />
                                <div className="px-8 py-10 relative z-1 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"> El Parque Caldas </h2>
                                    <p className="leading-relaxed"> El Parque Caldas es un ic&oacute;nico espacio p&uacute;blico ubicado en el coraz&oacute;n del centro hist&oacute;rico de la ciudad de Popay&aacute;n, en Colombia. Este parque es uno de los lugares m&aacute;s emblem&aacute;ticos de la ciudad, conocido por su belleza arquitect&oacute;nica, su rica historia y su vibrante ambiente cultural. </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 sm:w-full p-4 w-full">
                            <div className="flex relative h-[500px] lg:h-[400px] sm:h-[300px] w-full">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={pic_galleryB} />
                                <div className="px-8 py-10 relative z-1 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"> Puente del Humilladero </h2>
                                    <p className="leading-relaxed"> El Puente del Humilladero es una estructura hist&oacute;rica que se erige majestuosamente en la ciudad de Popay&aacute;n, Colombia. Construido en el siglo XVIII, este puente es un hito arquitect&oacute;nico que refleja la rica herencia colonial de la ciudad y su importancia hist&oacute;rica.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 sm:w-full p-4 w-full">
                            <div className="flex relative h-[500px] lg:h-[400px] sm:h-[300px] w-full">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={pic_galleryC} />
                                <div className="px-8 py-10 relative z-1 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"> Morro del Tulc&aacute;n </h2>
                                    <p className="leading-relaxed"> El Morro del Tulc&aacute;n es una prominente formaci&oacute;n geol&oacute;gica que se alza majestuosamente en las afueras de la ciudad de Popay&aacute;n. También llamado &#39;Cerro de Tulc&aacute;n&#39;, este escarpado monte ofrece vistas panor&aacute;micas impresionantes de la ciudad y sus alrededores. </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 sm:w-full p-4 w-full">
                            <div className="flex relative h-[500px] lg:h-[400px] sm:h-[300px] w-full">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={pic_galleryD} />
                                <div className="px-8 py-10 relative z-1 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"> Cerro de las Tres Cruces </h2>
                                    <p className="leading-relaxed"> El Cerro de las Tres Cruces es una prominente elevaci&oacute;n ubicada en las afueras de la ciudad de Popay&aacute;n. Este cerro recibe su nombre debido a las tres cruces que coronan su cima, las cuales son visibles desde varios puntos de la ciudad y sus alrededores. </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 sm:w-full p-4 w-full">
                            <div className="flex relative h-[500px] lg:h-[400px] sm:h-[300px] w-full">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={pic_galleryE} />
                                <div className="px-8 py-10 relative z-1 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"> Cerro de La Tetilla </h2>
                                    <p className="leading-relaxed"> El Cerro de La Tetilla es una prominente caracter&iacute;stica topogr&aacute;fica que se eleva sobre la ciudad de Popay&aacute;n. Es un punto de referencia importante y un &iacute;cono natural tanto para los residentes locales como para los visitantes de la ciudad. </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 sm:w-full p-4 w-full">
                            <div className="flex relative h-[500px] lg:h-[400px] sm:h-[300px] w-full">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={pic_galleryF} />
                                <div className="px-8 py-10 relative z-1 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"> Parroquia Amo Jes&uacute;s de Yanaconas </h2>
                                    <p className="leading-relaxed"> La Parroquia Amo Jes&uacute;s de Yanaconas en Popay&aacute;n es un lugar de profundo significado religioso y cultural. Situada en el barrio de Yanaconas, esta parroquia es reconocida por su hermosa arquitectura colonial y su importancia como centro de fe para la comunidad local. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery