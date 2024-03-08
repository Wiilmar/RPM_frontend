//----- Importacion de imagenes
import picTyecid from "../image/Home/pic_Tyecid.png"
import picTaldair from "../image/Home/pic_Taldair.png"
import picTalvaro from "../image/Home/pic_Talvaro.png"
import picTcamilo from "../image/Home/pic_Tcamilo.png"
import picTcristian from "../image/Home/pic_Tcristian.png"
import picTluis from "../image/Home/pic_Tluis.png"
import picTdaniel from "../image/rage.jpg"
import picTwilman from "../image/Home/pic_Twilman.png"
import picIG from "../image/Home/pic_instagram.png"
//import picDC from "../image/Home/pic_discord.png"
import picFB from "../image/Home/pic_facebook.png"
import picGitHub from "../image/Home/pic_github.png"
import picWP from "../image/Home/pic_whatsapp.png"

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
                                <a href="#" target="_blank" className="text-[#131314] hover:text-gray-900 dark:hover:text-black inline-block transform hover:scale-150 transition-transform duration-300">
                                    <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picFB } x="1" y="0" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" className="text-[#131314] hover:text-gray-900 dark:hover:text-black inline-block transform hover:scale-150 transition-transform duration-300">
                                    <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picGitHub } x="2" y="0" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" className="text-[#131314] hover:text-gray-900 dark:hover:text-black inline-block transform hover:scale-150 transition-transform duration-300">
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="-1" height="23" width="21"/>
                                    </svg>
                                </a>
                            </li> 
                        </ul>
                    </div>
                    {/* ------------------ */}
                    {/* Avatar Cristian  */}
                    <div className="text-center text-gray-500 dark:text-gray-400 group hover:bg-amarillo hover:rounded-lg transition-all duration-300 hover:py-5 hover:text-black">
                        <img className="mx-auto mb-4 w-40 h-44 rounded-full" src={ picTcristian } alt="Foto de perfil Yecid"/>
                        <h3 className="mb-1 text-3xl font-bold tracking-tight text-white group-hover:text-black"> Cristian Narvaez </h3>
                        <p className="text-xl group-hover:text-black"> Programador Backend </p>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="https://github.com/NarvaezSKY" target="_blank" className="text-[#131314] hover:text-gray-900 dark:hover:text-black inline-block transform hover:scale-150 transition-transform duration-300">
                                    <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picGitHub } x="2" y="0" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/narvaez_sky/" target="_blank" className="text-[#131314] hover:text-gray-900 dark:hover:text-black inline-block transform hover:scale-150 transition-transform duration-300">
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="-1" height="23" width="21"/>
                                    </svg>
                                </a>
                            </li> 
                        </ul>
                    </div>
                    {/* ------------------ */}
                    {/* Avatar Aldair  */}
                    <div className="text-center text-gray-500 dark:text-gray-400 group hover:bg-amarillo hover:rounded-lg transition-all duration-300 hover:py-5 hover:text-black">
                        <img className="mx-auto mb-4 w-44 h-44 rounded-full" src={ picTaldair } alt="Foto de perfil Yecid"/>
                        <h3 className="mb-1 text-3xl font-bold tracking-tight text-white group-hover:text-black"> Aldair Torres </h3>
                        <p className="text-xl group-hover:text-black"> Programador Backend </p>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="#" target="_blank" className="text-[#131314] hover:text-gray-900 dark:hover:text-black inline-block transform hover:scale-150 transition-transform duration-300">
                                    <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picFB } x="1" y="0" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" className="text-[#131314] hover:text-gray-900 dark:hover:text-black inline-block transform hover:scale-150 transition-transform duration-300">
                                    <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picGitHub } x="2" y="0" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" className="text-[#131314] hover:text-gray-900 dark:hover:text-black inline-block transform hover:scale-150 transition-transform duration-300">
                                    <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picWP } x="1" y="0" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* ------------------ */}
                    {/* Avatar Alvaro  */}
                    <div className="text-center text-gray-500 dark:text-gray-400 group hover:bg-amarillo hover:rounded-lg transition-all duration-300 hover:py-5 hover:text-black">
                        <img className="mx-auto mb-4 w-44 h-44 rounded-full" src={ picTalvaro } alt="Foto de perfil Yecid"/>
                        <h3 className="mb-1 text-3xl font-bold tracking-tight text-white group-hover:text-black"> Alvaro Lopez </h3>
                        <p className="text-xl group-hover:text-black"> Programador Backend </p>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="https://github.com/alvarolpz43" target="_blank" className="text-[#131314] hover:text-gray-900 dark:hover:text-black inline-block transform hover:scale-150 transition-transform duration-300">
                                    <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picGitHub } x="2" y="0" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/alvarolpzq.kt?igsh=MTUwYTZjeXkwNGEzNg==" target="_blank" className="text-[#131314] hover:text-gray-900 dark:hover:text-black inline-block transform hover:scale-150 transition-transform duration-300">
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="-1" height="23" width="21"/>
                                    </svg>
                                </a>
                            </li> 
                        </ul>
                    </div>
                    {/* ------------------ */}
                    {/* Avatar Wilman  */}
                    <div className="text-center text-gray-500 dark:text-gray-400 group hover:bg-amarillo hover:rounded-lg transition-all duration-300 hover:py-5 hover:text-black">
                        <img className="mx-auto mb-4 w-44 h-44 rounded-full" src={ picTwilman } alt="Foto de perfil Yecid"/>
                        <h3 className="mb-1 text-3xl font-bold tracking-tight text-white group-hover:text-black"> Wilman Rodriguez </h3>
                        <p className="text-xl group-hover:text-black"> Programador Frontend </p>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="https://wa.me/+573245533682" target="_blank" className="text-[#131314] hover:text-gray-900 dark:hover:text-black inline-block transform hover:scale-150 transition-transform duration-300">
                                    <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picWP } x="2" y="0" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Wiilmar" target="_blank" className="text-[#131314] hover:text-gray-900 dark:hover:text-black inline-block transform hover:scale-150 transition-transform duration-300">
                                    <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picGitHub } x="2" y="0" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/wagr_ig/" target="_blank" className="text-[#131314] hover:text-gray-900 dark:hover:text-black inline-block transform hover:scale-150 transition-transform duration-300">
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="-1" height="23" width="21"/>
                                    </svg>
                                </a>
                            </li> 
                        </ul>
                    </div>
                    {/* ------------------ */}
                    {/* Avatar Daniel  */}
                    <div className="text-center text-gray-500 dark:text-gray-400 group hover:bg-amarillo hover:rounded-lg transition-all duration-300 hover:py-5 hover:text-black">
                        <img className="mx-auto mb-4 w-44 h-44 rounded-full" src={ picTdaniel } alt="Foto de perfil Yecid"/>
                        <h3 className="mb-1 text-3xl font-bold tracking-tight text-white group-hover:text-black"> Daniel Lubo </h3>
                        <p className="text-xl group-hover:text-black"> Programador Frontend </p>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="https://www.facebook.com/danielLubor?mibextid=ZbWKwL" target="_blank" className="text-[#131314] hover:text-gray-900 dark:hover:text-black inline-block transform hover:scale-150 transition-transform duration-300">
                                    <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picFB } x="1" y="0" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Dan1elFelipe" target="_blank" className="text-[#131314] hover:text-gray-900 dark:hover:text-black inline-block transform hover:scale-150 transition-transform duration-300">
                                    <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picGitHub } x="2" y="0" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/not.denail/" target="_blank" className="text-[#131314] hover:text-gray-900 dark:hover:text-black inline-block transform hover:scale-150 transition-transform duration-300">
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="-1" height="23" width="21"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* ------------------ */}
                    {/* Avatar Camilo  */}
                    <div className="text-center text-gray-500 dark:text-gray-400 group hover:bg-amarillo hover:rounded-lg transition-all duration-300 hover:py-5 hover:text-black">
                        <img className="mx-auto mb-4 w-44 h-44 rounded-full" src={ picTcamilo } alt="Foto de perfil Yecid"/>
                        <h3 className="mb-1 text-3xl font-bold tracking-tight text-white group-hover:text-black"> Camilo Tacue </h3>
                        <p className="text-xl group-hover:text-black"> Programador M&#243;vil </p>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="https://www.facebook.com/share/uBd64mHZ5PdiuJer/?mibextid=qi2Omg" target="_blank" className="text-[#131314] hover:text-gray-900 dark:hover:text-black inline-block transform hover:scale-150 transition-transform duration-300">
                                    <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picFB } x="1" y="0" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/CamiloxD1206" target="_blank" className="text-[#131314] hover:text-gray-900 dark:hover:text-black inline-block transform hover:scale-150 transition-transform duration-300">
                                    <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picGitHub } x="2" y="0" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/camilo_tsz?utm_source=qr&igsh=YzZwcXFzN3d4ZmNi" target="_blank" className="text-[#131314] hover:text-gray-900 dark:hover:text-black inline-block transform hover:scale-150 transition-transform duration-300">
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="-1" height="23" width="21"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* ------------------ */}
                    {/* Avatar Luis  */}
                    <div className="text-center text-gray-500 dark:text-gray-400 group hover:bg-amarillo hover:rounded-lg transition-all duration-300 hover:py-5 hover:text-black">
                        <img className="mx-auto mb-4 w-44 h-44 rounded-full" src={ picTluis } alt="Foto de perfil Yecid"/>
                        <h3 className="mb-1 text-3xl font-bold tracking-tight text-white group-hover:text-black"> Luis Mart&iacute;nez </h3>
                        <p className="text-xl group-hover:text-black"> Programador M&#243;vil </p>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href="https://github.com/luiiszv" target="_blank" className="text-[#131314] hover:text-gray-900 dark:hover:text-black inline-block transform hover:scale-150 transition-transform duration-300">
                                    <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picGitHub } x="2" y="0" height="22" width="22"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/luiis.zv/" target="_blank" className="text-[#131314] hover:text-gray-900 dark:hover:text-black inline-block transform hover:scale-150 transition-transform duration-300">
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <image href={ picIG } x="2" y="-1" height="23" width="21"/>
                                    </svg>
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