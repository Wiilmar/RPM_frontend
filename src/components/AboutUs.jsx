//----- Importacion de imagenes
import picQmision from "../image/Home/pic_Qmision.png"
import picQvision from "../image/Home/pic_Qvision.png"
import picQvalores from "../image/Home/pic_Qvalores.png"

const AboutUs = () => {
    return(
        <>
        <section className="text-gray-400 bg-blueDark body-font">
            <div id="quienesSomos" className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-5xl font-medium title-font mb-4 text-white"> &#191;Qui&#233;nes Somos&#63; </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl">&#34;&#161;Conoce mas de nosotros&#33;&#34;</p>
                </div>
                {/* Primera Card: Mision */}
                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
                    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-yellow-400 bg-whiteLight flex-shrink-0">
                        <img src={ picQmision } alt="Logo de vision RPM" className="sm:w-16 sm:h-16 w-10 h-10 rounded-full object-cover"/>
                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-white text-3xl title-font font-medium mb-2"> Misi&#243;n </h2>
                        <p className="leading-relaxed text-2xl text-justify"> Nuestra <span className="text-yellow-500"> misi&#243;n </span> es ser el referente confiable y comprometido para aquellos que buscan vivir la experiencia &#250;nica del mototurismo, brindando siempre el apoyo necesario para que cada viaje sea memorable y enriquecedor. </p>
                    </div>
                </div>
                {/* ------------------- */}
                {/* Segunda Card: Vision */}
                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-white text-3xl title-font font-medium mb-2"> Visi&#243;n </h2>
                        <p className="leading-relaxed text-2xl text-justify">En un plazo de cinco años, nuestra <span className="text-yellow-500"> visi&#243;n </span> es convertirnos en la aplicaci&#243;n l&#237;der y m&#225;s descargada para organizar y disfrutar de viajes en moto en todo el continente americano.</p>
                    </div>
                    <div className="sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-yellow-400 bg-whiteLight flex-shrink-0">
                        <img src={ picQvision } alt="Logo de vision RPM" className="sm:w-16 sm:h-16 w-10 h-10 rounded-full object-cover"/>
                    </div>
                </div>
                {/* ------------------- */}
                {/* Tercera Card: Valores */}
                <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-yellow-400 bg-whiteLight flex-shrink-0">
                        <img src={ picQvalores } alt="Logo de vision RPM" className="sm:w-16 sm:h-16 w-10 h-10 rounded-full object-cover"/>
                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-white text-3xl title-font font-medium mb-2"> Valores </h2>
                        <p className="leading-relaxed text-2xl text-justify">Valoramos y promovemos los siguientes <span className="text-yellow-500"> principios </span> fundamentales: solidaridad, responsabilidad, hermandad, respeto y integridad.  </p>
                    </div>
                </div>
                {/* ------------------- */}
            </div>
        </section>
        </>
    )
}

export default AboutUs