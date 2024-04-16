import { useState } from 'react';

//----- Importacion de imagenes
import picTyecid from "../image/Home/pic_Tyecid.png"
import picTaldair from "../image/Home/pic_Taldair.png"
import picTalvaro from "../image/Home/pic_Talvaro.png"
import picTcamilo from "../image/Home/pic_Tcamilo.png"
import picTcristian from "../image/Home/pic_Tcristian.png"
import picTluis from "../image/Home/pic_Tluis.png"
import picTdaniel from "../image/Home/pic_Tdaniel.png"
import picTwilman from "../image/Home/pic_Twilman.png"
import picIG from "../image/Home/pic_logoInstagram.png"
//import picDC from "../image/Home/pic_discord.png"
import picFB from "../image/Home/pic_logoFacebook.png"
import picGitHub from "../image/Home/pic_logoGithub.png"
import picWP from "../image/Home/pic_logoWhatsapp.png"

//Hover integrantes
import picTyecidHover from "../image/Home/pic_MVYecid.png"
import picTcristianHover from "../image/Home/picTcristianHover.jpg"
import picTaldairHover from "../image/Home/picTaldairHover.png"
import picTalvaroHover from "../image/Home/picTdanielHover.png"
import picTwilmanHover from "../image/Home/picTwilmanHover.jpg"
import picTcamiloHover from "../image/Home/picTdanielHover.png"
import picTluisHover from "../image/Home/picTdanielHover.png"
import picTdanielHover from "../image/Home/picTdanielHover.png"


const Team = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const teamMembers = [
        {
            name: "Yecid Pardo",
            role: "Scrum Master",
            picOriginal: picTyecid,
            picHover: picTyecidHover,
            socialLinks: [
                { href: "https://web.facebook.com/Devisitaporelmundo/?locale=es_LA&_rdc=1&_rdr", icon: picFB },
                { href: "https://github.com/Moto-developer", icon: picGitHub },
                { href: "https://www.instagram.com/yecidpardo/", icon: picIG }
            ]
        },
        {
            name: "Cristian Narvaez",
            role: "Programador Backend",
            picOriginal: picTcristian,
            picHover: picTcristianHover,
            socialLinks: [
                { href: "https://github.com/NarvaezSKY", icon: picGitHub },
                { href: "https://www.instagram.com/narvaez_sky/", icon: picIG }
            ]
        },
        {
            name: "Aldair Torres",
            role: "Programador Backend",
            picOriginal: picTaldair,
            picHover: picTaldairHover,
            socialLinks: [
                { href: "https://wa.me/+573173394816", icon: picWP },
                { href: "https://github.com/aldair507", icon: picGitHub },
                { href: "https://www.instagram.com/aaldairtorres?igsh=emJveHZtcGVpMDZw&utm_source=qr", icon: picIG }
            ]
        },
        {
            name: "Alvaro Lopez",
            role: "Programador Backend",
            picOriginal: picTalvaro,
            picHover: picTalvaroHover,
            socialLinks: [
                { href: "https://github.com/alvarolpz43", icon: picGitHub },
                { href: "https://www.instagram.com/alvarolpzq.kt?igsh=MTUwYTZjeXkwNGEzNg==", icon: picIG }
            ]
        },
        {
            name: "Wilman Rodriguez",
            role: "Programador Frontend",
            picOriginal: picTwilman,
            picHover: picTwilmanHover,
            socialLinks: [
                { href: "https://wa.me/+573245533682", icon: picWP },
                { href: "https://github.com/Wiilmar", icon: picGitHub },
                { href: "https://www.instagram.com/wagr_ig/", icon: picIG }
            ]
        },
        {
            name: "Daniel Lubo",
            role: "Programador Frontend",
            picOriginal: picTdaniel,
            picHover: picTdanielHover,
            socialLinks: [
                { href: "https://www.facebook.com/danielLubor?mibextid=ZbWKwL", icon: picFB },
                { href: "https://github.com/Dan1elFelipe", icon: picGitHub },
                { href: "https://www.instagram.com/not.denail/", icon: picIG }
            ]
        },
        {
            name: "Camilo Tacue",
            role: "Programador Móvil",
            picOriginal: picTcamilo,
            picHover: picTcamiloHover,
            socialLinks: [
                { href: "https://www.facebook.com/share/uBd64mHZ5PdiuJer/?mibextid=qi2Omg", icon: picFB },
                { href: "https://github.com/CamiloxD1206", icon: picGitHub },
                { href: "https://www.instagram.com/camilo_tsz?utm_source=qr&igsh=YzZwcXFzN3d4ZmNi", icon: picIG }
            ]
        },
        {
            name: "Luis Martínez",
            role: "Programador Móvil",
            picOriginal: picTluis,
            picHover: picTluisHover,
            socialLinks: [
                { href: "https://github.com/luiiszv", icon: picGitHub },
                { href: "https://www.instagram.com/luiis.zv/", icon: picIG }
            ]
        },
    ];

    return (
        <>
            <section className="bg-white dark:bg-blueDark">
                <div id="equipo" className="py-20 px-4 mx-auto max-w-screen-xl text-center lg:py-20 lg:px-6">
                    <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                        <h2 className="mb-4 text-4xl font-bold title-font text-gray-900 dark:text-white">Nuestro equipo</h2>
                        <p className="font-light text-gray-500 text-xl dark:text-gray-400"> &#34;Descubre quiénes son las personas detrás de este inspirador proyecto.&#34; </p>
                    </div>
                    <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {/* Card Team */}
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center text-gray-500 dark:text-gray-400 group hover:bg-amarillo hover:rounded-lg transition-all duration-300 hover:py-5 hover:text-black"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}>
                                <img className="mx-auto mb-4 w-45 h-44 rounded-full" src={hoveredIndex === index ? member.picHover : member.picOriginal} alt={`Foto de perfil ${member.name}`} />
                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-white group-hover:text-black">{member.name}</h3>
                                <p className="text-xl group-hover:text-black">{member.role}</p>
                                <ul className="flex justify-center mt-4 space-x-4">
                                    {member.socialLinks.map((socialLink, i) => (
                                        <li key={i}>
                                            <a href={socialLink.href} target="_blank" className="text-[#131314] hover:text-gray-900 dark:hover:text-black inline-block transform hover:scale-150 transition-transform duration-300">
                                                <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                                    <image href={socialLink.icon} x="2" y="0" height="20" width="20" />
                                                </svg>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        {/* ------------------ */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team