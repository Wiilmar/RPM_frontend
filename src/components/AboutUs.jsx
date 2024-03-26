//----- Importacion de imagenes
import picQmision from "../image/Home/pic_Qmision.png"
import picQvision from "../image/Home/pic_Qvision.png"
import picQvalores from "../image/Home/pic_Qvalores.png"

const AboutUs = () => {
    return (
        <>
            <div className="relative bg-yellow-800">
                {/* Primer ola */}
                <svg className="absolute top-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fillOpacity="1" d="M0,96L60,112C120,128,240,160,360,176C480,192,600,192,720,160C840,128,960,64,1080,58.7C1200,53,1320,107,1380,133.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                </svg>

                {/* Segunda ola */}
                <svg className="absolute top-0 left-0 w-full z-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#000814" fillOpacity="0.5" d="M0,128L60,117.3C120,107,240,85,360,96C480,107,600,149,720,160C840,171,960,149,1080,128C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>

                {/* Tercera ola */}
                <svg className="absolute top-0 left-0 w-full z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#000814" fillOpacity="0.1" d="M0,160L60,154.7C120,149,240,139,360,133.3C480,128,600,128,720,149.3C840,171,960,213,1080,213.3C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
                <section className="text-gray-400 bg-blueDark body-font mt-[-83px] pt-20 2xl:pt-56 lg:pt-52 md:pt-32 sm:pt-20">
                    <div id="quienesSomos" className="container px-5 py-24 mx-auto relative z-30">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="text-4xl font-medium title-font mb-4 text-white"> &#191;Qui&#233;nes Somos&#63; </h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">&#34;&#161;Conoce mas de nosotros&#33;&#34;</p>
                        </div>
                        {/* Primera Card: Mision */}
                        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
                            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-yellow-400 bg-whiteLight flex-shrink-0">
                                <img src={picQmision} alt="Logo de vision RPM" className="sm:w-16 sm:h-16 w-10 h-10 object-cover" />
                            </div>
                            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 className="text-white text-2xl title-font font-medium mb-2"> Misi&#243;n </h2>
                                <p className="leading-relaxed text-xl text-alain-left"> Nuestra <span className="text-yellow-500"> misi&#243;n </span> es ser el referente confiable y comprometido para aquellos que buscan vivir la experiencia &#250;nica del mototurismo, brindando siempre el apoyo necesario para que cada viaje sea memorable y enriquecedor. </p>
                            </div>
                        </div>
                        {/* ------------------- */}
                        {/* Segunda Card: Vision */}
                        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
                            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 className="text-white text-2xl title-font font-medium mb-2"> Visi&#243;n </h2>
                                <p className="leading-relaxed text-xl text-alain-right">En un plazo de cinco años, nuestra <span className="text-yellow-500"> visi&#243;n </span> es convertirnos en la aplicaci&#243;n l&#237;der y m&#225;s descargada para organizar y disfrutar de viajes en moto en todo el continente americano.</p>
                            </div>
                            <div className="sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-yellow-400 bg-whiteLight flex-shrink-0">
                                <img src={picQvision} alt="Logo de vision RPM" className="sm:w-16 sm:h-16 w-10 h-10 object-cover" />
                            </div>
                        </div>
                        {/* ------------------- */}
                        {/* Tercera Card: Valores */}
                        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col mb-10">
                            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-yellow-400 bg-whiteLight flex-shrink-0">
                                <img src={picQvalores} alt="Logo de vision RPM" className="sm:w-16 sm:h-16 w-10 h-10 object-cover" />
                            </div>
                            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 className="text-white text-2xl title-font font-medium mb-2"> Valores </h2>
                                <p className="leading-relaxed text-xl text-alain-left">Valoramos y promovemos los siguientes <span className="text-yellow-500"> principios </span> fundamentales: solidaridad, responsabilidad, hermandad, respeto y integridad.  </p>
                            </div>
                        </div>
                        {/* ------------------- */}
                    </div>
                </section>
            </div>
        </>
    )
}

export default AboutUs