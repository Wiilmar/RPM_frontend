//----- Importacion de imagenes
import picQmision from "../image/Home/pic_Qmision.png"
import picQvision from "../image/Home/pic_Qvision.png"
import picQvalores from "../image/Home/pic_Qvalores.png"

const AboutUs = () => {
    return (
        <>
            <section className="text-gray-400 bg-blueDark body-font mt-[-83px]">
                <svg className="w-full" viewBox="0 20 1440 320" xmlns="http://www.w3.org/2000/svg">
                    {/* Relleno del path para la parte inferior de la ola (azul oscuro) */}
                    <path fill="#000814" fillOpacity="1" d="M0,224L60,234.7C120,245,240,267,360,272C480,277,600,267,720,234.7C840,203,960,149,1080,138.7C1200,128,1320,160,1380,176L1440,192V0H1440V320H0Z"></path>
                    {/* Relleno del path para la parte superior de la ola (blanco) */}
                    <path fill="#ffffff" fillOpacity="1" d="M0,0H1440V192L1380,176C1320,160,1200,128,1080,138.7C960,149,840,203,720,234.7C600,267,480,277,360,272C240,267,120,245,60,234.7L0,224V0Z"></path>
                </svg>
                <div id="quienesSomos" className="container px-5 py-24 mx-auto">
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
        </>
    )
}

export default AboutUs