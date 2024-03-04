//----- Importaciones de Hooks
//import { useEffect, useState } from "react"

//----- Importacion de componentes
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"

//----- Importacion de imagenes
import picMV from "../../image/Home/pic_MVYecid.png"
import picSRutas from "../../image/Home/pic_rutas2.webp"
import picSPresupuesto from "../../image/Home/pic_presupuesto2.webp"
import picSMotoviajeros from "../../image/Home/pic_motoviajeros2.jpg"
import picQmision from "../../image/Home/pic_Qmision.png"
import picQvision from "../../image/Home/pic_Qvision.png"
import picQvalores from "../../image/Home/pic_Qvalores.png"

//------ Importacion de mas Imagenes

import sujetoUno from "../../image/sujetoUno.jpg"
import sujetoDos from "../../image/sujetoDos.jpg"
import sujetaTres from "../../image/sujetaTres.jpg"

const Home = () => {
    return (
      <>
        <Nav></Nav>
        <section className="text-gray-400 bg-amarillo body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-5xl text-5xl mb-4 font-medium text-black">Rutas Para Moteros </h1>
              <p className="mb-8 leading-relaxed text-black sm:text-2xl text-2xl"> &#34;Descubre nuevas emociones en dos ruedas con R.P.M. <br className="hidden lg:inline-block" /> &#161;La gu&#237;a definitiva para explorar el mundo en moto&#33;&#34; </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-blueDark border-0 py-2 px-6 focus:outline-none hover:bg-blueLight hover:text-white rounded text-lg"> Descargar </button>
                <button className="ml-4 inline-flex text-white border-2 border-white py-2 px-6 focus:outline-none hover:bg-white-100 hover:text-black hover:border-black rounded text-lg"> Cont&#225;ctanos </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
              <img className="object-cover object-center rounded" alt="hero" src={ picMV } />
            </div>
          </div>
        </section>

        <section className="text-gray-400 bg-white body-font">
            <div id="servicios" className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-5xl font-bold title-font mb-4 text-black"> Nuestros Servicios </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl text-black text-opacity-50">Explora nuestra amplia gama de servicios diseñados especialmente para hacer de tu viaje una experiencia inolvidable.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {/* Primera Card: Rutas */}
                    <div className="p-4 md:w-1/3 ">
                        <div className="h-full border-2 rounded-lg overflow-hidden border-black bg-blueLight">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={ picSRutas } alt="blog"/>
                            <div className="p-6 ">
                                <h1 className="title-font text-3xl text-white mb-3 font-bold"> Rutas </h1>
                                <p className="leading-relaxed mb-3 text-2xl text-whiteLight">Nuestra app te permite explorar paisajes impresionantes, disfrutar de la libertad sobre dos ruedas y crear recuerdos inolvidables en cada ruta.</p>
                            </div>
                        </div>
                    </div>
                    {/* ------------------- */}
                    {/* Segunda Card: Presupuesto */}
                    <div className="p-4 md:w-1/3 ">
                        <div className="h-full border-2 rounded-lg overflow-hidden border-black bg-blueLight">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={ picSPresupuesto } alt="blog"/>
                            <div className="p-6">
                                <h1 className="title-font text-3xl text-white mb-3 font-bold"> Presupuesto </h1>
                                <p className="leading-relaxed mb-3 text-2xl text-whiteLight">Nuestro aplicativo te ofrece un posible presupuesto en base a la ruta que traces desde un punto a otro en nuestro mapa. </p>
                            </div>
                        </div>
                    </div>
                    {/* ------------------- */}
                    {/* Tercera Card: Motoviajeros */}
                    <div className="p-4 md:w-1/3 ">
                        <div className="h-full border-2 rounded-lg overflow-hidden border-black bg-blueLight">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={ picSMotoviajeros } alt="blog"/>
                            <div className="p-6">
                                <h1 className="title-font text-3xl text-white mb-3 font-bold"> Motoviajeros </h1>
                                <p className="leading-relaxed mb-3 text-2xl text-whiteLight">Nuestra app te ofrece una plataforma para conectar con otros motoviajeros, compartir experiencias, consejos y planificar viajes juntos.</p>
                            </div>
                        </div>
                    </div>
                    {/* ------------------- */}
                </div>
            </div>
        </section>
        
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
                        <p className="leading-relaxed text-2xl"> Nuestra <span className="text-yellow-500"> misi&#243;n </span> es ser el referente confiable y comprometido para aquellos que buscan vivir la experiencia &#250;nica del mototurismo, brindando siempre el apoyo necesario para que cada viaje sea memorable y enriquecedor. </p>
                    </div>
                </div>
                {/* ------------------- */}
                {/* Segunda Card: Vision */}
                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-white text-3xl title-font font-medium mb-2"> Visi&#243;n </h2>
                        <p className="leading-relaxed text-2xl">En un plazo de cinco años, nuestra <span className="text-yellow-500"> visi&#243;n </span> es convertirnos en la aplicaci&#243;n l&#237;der y m&#225;s descargada para organizar y disfrutar de viajes en moto en todo el continente americano.</p>
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
                        <p className="leading-relaxed text-2xl">Valoramos y promovemos los siguientes <span className="text-yellow-500"> principios </span> fundamentales: <br/> solidaridad, responsabilidad, hermandad, respeto y integridad.  </p>
                    </div>
                </div>
                {/* ------------------- */}
            </div>
        </section>


        {/*el pepeeeeee*/}

        <section>
            <div className="relative items-center w-full px-5 py-10 mx-auto md:px-12 lg:px-24 max-w-7xl">
                <div className="flex flex-col text-center w-full ">
                    <h1 className="text-5xl font-bold title-font py-20 text-black">¡Nuestras Experiencias!</h1>
                </div>

                <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-3">
                    <div className="p-6">
                        <img src={sujetoUno} className="h-28 border border-gray-300 rounded-lg" />
                        <h2 className="mx-auto py-4 text-2xl font-medium leading-none tracking-tighter text-amarilloTitle lg:text-3xl">Jack Ryder</h2>
                        <p className="mx-auto text-2xl leading-relaxed text-gray-500">RPM hizo que mi viaje en moto fuera increíblemente suave. Con su ayuda, pude trazar rutas emocionantes a través de paisajes impresionantes y descubrir lugares increíbles en cada parada. ¡Definitivamente es la aplicación perfecta para cualquier motoviajero!</p>
                    </div>
                    <div className="p-6">
                        <img  src={sujetoDos}  className="h-28 border border-gray-300 rounded-lg"/>
                        <h2 className="mx-auto py-4 text-2xl font-medium leading-none tracking-tighter text-amarilloTitle lg:text-3xl">Alexander Kornovich</h2>
                        <p className="mx-auto text-2xl leading-relaxed text-gray-500">Fue mi compañero constante en mi travesía en moto. Me mantuvo en el camino correcto, me alertó sobre condiciones peligrosas y me ayudó a encontrar los mejores lugares para descansar y disfrutar del paisaje. ¡Una aplicación imprescindible para cualquier motoviajero aventurero!</p>
                    </div>
                    <div className="p-6">
                        <img  src={sujetaTres}  className="h-28 border border-gray-300 rounded-lg"/>
                        <h2 className="mx-auto py-4 text-2xl font-medium leading-none tracking-tighter text-amarilloTitle lg:text-3xl">Alejandra Rodriguez</h2>
                        <p className="mx-auto text-2xl leading-relaxed text-gray-500">Con su ayuda, pude planificar rutas emocionantes y seguras, encontrar alojamiento y restaurantes de calidad, y disfrutar al máximo de cada destino. ¡Recomendaría esta aplicación a cualquier motoviajero que quiera una experiencia inolvidable!</p>
                    </div>
                </div>
            </div>
        </section>


        <Footer></Footer>

        {/* Boton para que el usuario sea enviado al principio de la pagina */}
        <section>
            <a href="#">
                <button className={'fixed bottom-8 right-8 bg-blue-500 hover:bg-black text-white hover:text-amarillo px-4 py-2 rounded-full transition duration-300'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            </a>
        </section>
        {/* ------------------- */}
        
      </>
    )
}
// HOLA PEPE
export default Home

/*
*TAREAS PENDIENTES 

toDo: Cambiar imagenes del modulo "Quienes Somos?"
toDO: Corregir problemas de encaje con el footer - DANIEL 
*/