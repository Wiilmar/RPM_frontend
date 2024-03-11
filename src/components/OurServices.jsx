//----- Importacion de imagenes
import picSRutas from "../image/Home/pic_rutas2.webp"
import picSPresupuesto from "../image/Home/pic_presupuesto2.webp"
import picSMotoviajeros from "../image/Home/pic_motoviajeros2.jpg"

const OurServices = () => {
    return(
        <>
        <section className="text-gray-400 bg-white body-font">
            <div id="servicios" className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-5xl font-bold title-font mb-4 text-black"> Nuestros Servicios </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl text-black text-opacity-50">Explora nuestra amplia gama de servicios diseñados especialmente para hacer de tu viaje una experiencia inolvidable.</p>
                </div>
                <div className="flex flex-wrap -m-7">
                    {/* Primera Card: Rutas */}
                    <div className="p-4 md:w-1/3 ">
                        <div className="h-full border-2 rounded-2xl overflow-hidden border-black bg-blueLight">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={ picSRutas } alt="blog"/>
                            <div className="p-6">
                                <h1 className="title-font text-3xl text-white mb-3 font-bold"> Rutas </h1>
                                <p className="leading-relaxed mb-3 text-2xl text-whiteLight text-justify">Nuestra app te permite explorar paisajes impresionantes, disfrutar de la libertad sobre dos ruedas y crear recuerdos inolvidables en cada ruta.</p>
                            </div>
                        </div>
                    </div>
                    {/* ------------------- */}
                    {/* Segunda Card: Presupuesto */}
                    <div className="p-4 md:w-1/3 ">
                        <div className="h-full border-2 rounded-2xl overflow-hidden border-black bg-blueLight">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={ picSPresupuesto } alt="blog"/>
                            <div className="p-6">
                                <h1 className="title-font text-3xl text-white mb-3 font-bold"> Presupuesto </h1>
                                <p className="leading-relaxed mb-3 text-2xl text-whiteLight text-justify">Nuestro aplicativo te ofrece un posible presupuesto en base a la ruta que traces desde un punto a otro en nuestro mapa. </p>
                            </div>
                        </div>
                    </div>
                    {/* ------------------- */}
                    {/* Tercera Card: Motoviajeros */}
                    <div className="p-4 md:w-1/3 ">
                        <div className="h-full border-2 rounded-2xl overflow-hidden border-black bg-blueLight">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={ picSMotoviajeros } alt="blog"/>
                            <div className="p-6">
                                <h1 className="title-font text-3xl text-white mb-3 font-bold"> Motoviajeros </h1>
                                <p className="leading-relaxed mb-3 text-2xl text-whiteLight text-justify">Nuestra app te ofrece una plataforma para conectar con otros motoviajeros, compartir experiencias, consejos y planificar viajes juntos.</p>
                            </div>
                        </div>
                    </div>
                    {/* ------------------- */}
                </div>
            </div>
        </section>
        </>
    )
} 

export default OurServices

