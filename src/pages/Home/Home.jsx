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
import picTyecid from "../../image/Home/pic_Tyecid.png"
import picTaldair from "../../image/Home/pic_Taldair.png"
import picIG from "../../image/logoIG.png"


//------ Importacion de mas Imagenes
import pepe from "../../image/rage.jpg"
import alvareto from "../../image/alvareto.png"
import yo from "../../image/yo.png"

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
                        <img src={pepe} className="h-28 border border-gray-300 rounded-lg" />
                        <h2 className="mx-auto py-4 text-2xl font-medium leading-none tracking-tighter text-neutral-600 lg:text-3xl">Camilo</h2>
                        <p className="mx-auto text-2xl leading-relaxed text-gray-500"> Gracias al aplicativo RPM, he podido descubrir rutas y lugares incre&iacute;bles que no conocía previamente. La comunidad de moteros en la aplicación es muy amigable y siempre están dispuestos a compartir consejos y recomendaciones. Definitivamente, ha enriquecido mis experiencias en moto.</p>
                    </div>
                    <div className="p-6">
                        <img  src={alvareto}  className="h-28 border border-gray-300 rounded-lg"/>
                        <h2 className="mx-auto py-4 text-2xl font-medium leading-none tracking-tighter text-neutral-600 lg:text-3xl">Yecid Pardo</h2>
                        <p className="mx-auto text-2xl leading-relaxed text-gray-500">Como motoviajero, la seguridad es una prioridad para mí. El aplicativo RPM me ha ayudado a encontrar rutas seguras y a conocer las condiciones del camino antes de emprender mi aventura. Además, la función de seguimiento en tiempo real proporciona tranquilidad tanto para mí como para mis seres queridos.</p>
                    </div>
                    <div className="p-6">
                        <img  src={yo}  className="h-28 border border-gray-300 rounded-lg"/>
                        <h2 className="mx-auto py-4 text-2xl font-medium leading-none tracking-tighter text-neutral-600 lg:text-3xl">Alejandra Rodriguez</h2>
                        <p className="mx-auto text-2xl leading-relaxed text-gray-500">¡El aplicativo RPM ha cambiado por completo la forma en que organizo mis viajes en moto! Ahora puedo planificar rutas incre&iacute;bles, descubrir nuevos destinos y conectarme con otros motociclistas apasionados. Es una herramienta invaluable para cualquier amante de las motos.</p>
                    </div>
                </div>
            </div>
        </section>


        <Footer></Footer>

        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Nuestro equipo</h2>
                    <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400"> "Descubre quiénes son las personas detrás de este inspirador proyecto." </p>
                </div> 
                <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {/* Avatar Yecid */}
                    <div class="text-center text-gray-500 dark:text-gray-400">
                        <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={ picTyecid } alt="Foto de perfil Yecid"/>
                        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Yecid Pardo </h3>
                        <p> Scrum Master </p>
                        <ul class="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-blue-200">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white hover:opacity-70 hover:bg-white">
                                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="2" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                </a>
                            </li> 
                        </ul>
                    </div>
                    {/* ------------------ */}
                    {/* Avatar Cristian  */}
                    <div class="text-center text-gray-500 dark:text-gray-400">
                        <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={ picTyecid } alt="Foto de perfil Yecid"/>
                        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Cristian Narvaez </h3>
                        <p> Cargo </p>
                        <ul class="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-blue-200">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white hover:opacity-70 hover:bg-white">
                                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="2" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                </a>
                            </li> 
                        </ul>
                    </div>
                    {/* ------------------ */}
                    {/* Avatar Wilman  */}
                    <div class="text-center text-gray-500 dark:text-gray-400">
                        <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={ picTyecid } alt="Foto de perfil Yecid"/>
                        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Wilman Rodriguez </h3>
                        <p> Cargo </p>
                        <ul class="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-blue-200">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white hover:opacity-70 hover:bg-white">
                                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="2" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                </a>
                            </li> 
                        </ul>
                    </div>
                    {/* ------------------ */}
                    {/* Avatar Daniel  */}
                    <div class="text-center text-gray-500 dark:text-gray-400">
                        <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={ picTyecid } alt="Foto de perfil Yecid"/>
                        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Daniel Lubo </h3>
                        <p> cargo </p>
                        <ul class="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-blue-200">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white hover:opacity-70 hover:bg-white">
                                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="2" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                </a>
                            </li> 
                        </ul>
                    </div>
                    {/* ------------------ */}
                    {/* Avatar Camilo  */}
                    <div class="text-center text-gray-500 dark:text-gray-400">
                        <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={ picTyecid } alt="Foto de perfil Yecid"/>
                        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Camilo Tacue </h3>
                        <p> Cargo </p>
                        <ul class="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-blue-200">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white hover:opacity-70 hover:bg-white">
                                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="2" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                </a>
                            </li> 
                        </ul>
                    </div>
                    {/* ------------------ */}
                    {/* Avatar Luis  */}
                    <div class="text-center text-gray-500 dark:text-gray-400">
                        <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={ picTyecid } alt="Foto de perfil Yecid"/>
                        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Luis Martinez </h3>
                        <p> Cargo </p>
                        <ul class="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-blue-200">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white hover:opacity-70 hover:bg-white">
                                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="2" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                </a>
                            </li> 
                        </ul>
                    </div>
                    {/* ------------------ */}
                    {/* Avatar Aldair  */}
                    <div class="text-center text-gray-500 dark:text-gray-400">
                        <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={ picTyecid } alt="Foto de perfil Yecid"/>
                        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Aldair Torres </h3>
                        <p> Cargo </p>
                        <ul class="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-blue-200">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white hover:opacity-70 hover:bg-white">
                                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="2" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                </a>
                            </li> 
                        </ul>
                    </div>
                    {/* ------------------ */}
                    {/* Avatar Alvaro  */}
                    <div class="text-center text-gray-500 dark:text-gray-400">
                        <img class="mx-auto mb-4 w-36 h-36 rounded-full" src={ picTyecid } alt="Foto de perfil Yecid"/>
                        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Alvaro Lopez </h3>
                        <p> Cargo </p>
                        <ul class="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-blue-200">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white hover:opacity-70 hover:bg-white">
                                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="2" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                </a>
                            </li> 
                        </ul>
                    </div>
                    {/* ------------------ */}
                </div> 
            </div>
        </section>
        {/* Boton para que el usuario sea enviado al principio de la pagina */}
        <section>
            <a href="#">
                <button className={'fixed bottom-8 right-8 bg-blue-500 hover:bg-black text-white hover:text-amarillo px-2 py-2 rounded-full transition duration-300'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                    </svg>
                </button>
            </a>
        </section>
        {/* ------------------- */}
        
      </>
    )
}

export default Home

/*
*TAREAS PENDIENTES 

toDo: Cambiar imagenes del modulo "Quienes Somos?"
toDO: Corregir problemas de encaje con el footer - DANIEL 
*/