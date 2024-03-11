//----- Importacion de imagenes
import logoPS from '../image/Home/logo_PlayStore.png'
import logoApk from '../image/Home/logo_apk.png'

import pic_BGYecid from '../image/Home/pic_MVYecid2.png'

const Gallery = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-20 mx-auto">
                    <div className="flex flex-col text-center w-auto mb-9 bg-blueDark rounded-2xl">
                        <h1 className="sm:text-5xl text-5xl font-bold title-font mb-4 text-white pb-1 pt-10"> Únete a R.P.M. </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl text-justify pb-8 px-12 text-whiteDark">Descubre la aplicación de moto viajeros y explora el mundo en tu moto de manera emocionante. Planifica tus viajes eficientemente, encuentra rutas personalizadas y alojamiento acogedor. Conéctate con otros moto viajeros para compartir experiencias únicas y descubrir nuevos destinos fascinantes. ¡Descarga la aplicación ahora y vive la experiencia al máximo!</p>
                        <div className="flex justify-center mx-auto items-center flex-shrink-0 space-x-5 mb-9 bg-blueDark pb-5 px-6">
                            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                                <img src={logoPS} alt="Google Play" className="w-6 h-6" />
                                <span className="ml-4 flex items-start flex-col leading-none">
                                    <span className="text-xs text-gray-600 mb-1">Descargar</span>
                                    <span className="title-font font-medium">Play Store</span>
                                </span>
                            </button>
                            <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
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
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={ pic_BGYecid } />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">El subtitulo </h2>
                                    <p className="leading-relaxed"> Descripcion de la imagen</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 sm:w-full p-4 w-full">
                            <div className="flex relative h-[500px] lg:h-[400px] sm:h-[300px] w-full">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={ pic_BGYecid } />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">El subtitulo </h2>
                                    <p className="leading-relaxed"> Descripcion de la imagen</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 sm:w-full p-4 w-full">
                            <div className="flex relative h-[500px] lg:h-[400px] sm:h-[300px] w-full">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={ pic_BGYecid } />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">El subtitulo </h2>
                                    <p className="leading-relaxed"> Descripcion de la imagen</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 sm:w-full p-4 w-full">
                            <div className="flex relative h-[500px] lg:h-[400px] sm:h-[300px] w-full">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={ pic_BGYecid } />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">El subtitulo </h2>
                                    <p className="leading-relaxed"> Descripcion de la imagen</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 sm:w-full p-4 w-full">
                            <div className="flex relative h-[500px] lg:h-[400px] sm:h-[300px] w-full">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={ pic_BGYecid } />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">El subtitulo </h2>
                                    <p className="leading-relaxed"> Descripcion de la imagen</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 sm:w-full p-4 w-full">
                            <div className="flex relative h-[500px] lg:h-[400px] sm:h-[300px] w-full">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={ pic_BGYecid } />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">El subtitulo </h2>
                                    <p className="leading-relaxed"> Descripcion de la imagen</p>
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