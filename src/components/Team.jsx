//----- Importacion de imagenes
import picTyecid from "../image/Home/pic_Tyecid.png"
import picTaldair from "../image/Home/pic_Taldair.png"
import picTalvaro from "../image/Home/pic_Talvaro.png"
import picTcamilo from "../image/Home/pic_Tcamilo.png"
import picTcristian from "../image/Home/pic_Tcristian.png"
import picTluis from "../image/Home/pic_Tluis.png"
import picTDaniel from "../image/rage.jpg"
import picTwilman from "../image/Home/pic_Twilman.png"
import picIG from "../image/logoIG.png"
import picDC from "../image/Home/pic_DC.png"


const Team = () => {
    return (
        <>
        <section className="bg-white dark:bg-blueDark">
            <div id="equipo" className="py-20 px-4 mx-auto max-w-screen-xl text-center lg:py-20 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Nuestro equipo</h2>
                    <p className="font-light text-gray-500 text-2xl dark:text-gray-400"> &#34;Descubre quiénes son las personas detrás de este inspirador proyecto.&#34; </p>
                </div> 
                <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {/* Avatar Yecid */}
                    <div className="text-center text-gray-500 dark:text-gray-400 group hover:bg-amarillo hover:rounded-lg transition-all duration-300 hover:py-5 hover:text-black">
                        <img className="mx-auto mb-4 w-44 h-44 rounded-full" src={ picTyecid } alt="Foto de perfil Yecid"/>
                        <h3 className="mb-1 text-3xl font-bold tracking-tight text-white group-hover:text-black"> Yecid Pardo </h3>
                        <p className="text-xl group-hover:text-black"> Scrum Master </p>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="#" target="_blanck" className="text-[#131314] hover:text-gray-900 dark:hover:text-black hover:opacity-80 hover:bg-black">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="2" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" className="text-[#131314] hover:text-gray-900 dark:hover:text-black inline-block transform hover:scale-150 transition-transform duration-300">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="2" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                </a>
                            </li> 
                        </ul>
                    </div>
                    {/* ------------------ */}
                    {/* Avatar Cristian  */}
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-4 w-44 h-44 rounded-full" src={ picTcristian } alt="Foto de perfil Cristian"/>
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Cristian Narvaez </h3>
                        <p className="text-lg"> Programador Backend </p>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="https://www.instagram.com/narvaez_sky/" target="_blanck"className="text-[#39569c] hover:text-gray-900 dark:hover:text-white hover:opacity-70 hover:bg-white">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="2" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/NarvaezSKY" target="_blanck" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                </a>
                            </li> 
                        </ul>
                    </div>
                    {/* ------------------ */}
                    {/* Avatar Wilman  */}
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-4 w-44 h-44 rounded-full" src={ picTwilman } alt="Foto de perfil Wilman"/>
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Wilman Rodriguez </h3>
                        <p className="text-lg"> Programador Frontend </p>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white hover:opacity-70 hover:bg-white">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picDC } x="2" y="2" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white hover:opacity-70 hover:bg-white">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="2" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                </a>
                            </li> 
                        </ul>
                    </div>
                    {/* ------------------ */}
                    {/* Avatar Daniel  */}
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-4 w-44 h-44 rounded-full" src={ picTDaniel } alt="Foto de perfil Daniel"/>
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Daniel Lubo </h3>
                        <p className="text-lg"> Programador Frontend </p>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="https://www.youtube.com/watch?v=GBIIQ0kP15E" className="text-[#39569c] hover:text-gray-900 dark:hover:text-blue-200">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white hover:opacity-70 hover:bg-white">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="2" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white hover:opacity-70 hover:bg-white">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picDC } x="2" y="2" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                </a>
                            </li> 
                        </ul>
                    </div>
                    {/* ------------------ */}
                    {/* Avatar Camilo  */}
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-4 w-44 h-44 rounded-full" src={ picTcamilo } alt="Foto de perfil Camilo"/>
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Camilo Tacue </h3>
                        <p className="text-lg"> Programador M&#243;vil </p>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="https://www.facebook.com/share/uBd64mHZ5PdiuJer/?mibextid=qi2Omg" target="_blank"  className="text-[#39569c] hover:text-gray-900 dark:hover:text-blue-200">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/camilo_tsz?utm_source=qr&igsh=YzZwcXFzN3d4ZmNi" target="_blank" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white hover:opacity-70 hover:bg-white">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="2" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/CamiloxD1206" target="_blank" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                </a>
                            </li> 
                        </ul>
                    </div>
                    {/* ------------------ */}
                    {/* Avatar Luis  */}
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-4 w-44 h-44 rounded-full" src={ picTluis } alt="Foto de perfil Luis"/>
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Luis Martinez </h3>
                        <p className="text-lg"> Programador M&#243;vil </p>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white hover:opacity-70 hover:bg-white">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="2" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                </a>
                            </li> 
                        </ul>
                    </div>
                    {/* ------------------ */}
                    {/* Avatar Aldair  */}
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-4 w-44 h-44 rounded-full" src={ picTaldair } alt="Foto de perfil Aldair"/>
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Aldair Torres </h3>
                        <p className="text-lg"> Programador Backend </p>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-blue-200">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white hover:opacity-70 hover:bg-white">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="2" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                </a>
                            </li> 
                        </ul>
                    </div>
                    {/* ------------------ */}
                    {/* Avatar Alvaro  */}
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-4 w-44 h-44 rounded-full" src={ picTalvaro } alt="Foto de perfil alvaro"/>
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Alvaro Lopez </h3>
                        <p className="text-lg"> Programador Backend </p>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="#" className="text-[#39569c] hover:text-gray-900 dark:hover:text-white hover:opacity-70 hover:bg-white">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="2" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 23 23" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                                </a>
                            </li> 
                        </ul>
                    </div>
                    {/* ------------------ */}
                </div> 
            </div>
        </section>
        </>
    )
}

export default Team