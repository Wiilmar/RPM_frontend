//----- Importaciones de Hooks
import { useEffect, useState } from "react"

//----- Importacion de imagenes
import picManual from './Elementos/pic_IconManual.png'

//----- Importacion de componentes
import Nav from "../../components/Nav"
import Information from "../../components/Information"
import OurServices from "../../components/OurServices"
import AboutUs from "../../components/AboutUs"
import OurExperiences from "../../components/OurExperiences"
import Team from "../../components/Team"
import Gallery from "../../components/Gallery"
import Faq from "../../components/Faq"
import ContactUs from "../../components/ContactUs"
import Statistics from "../../components/Statistics"
import Footer from "../../components/Footer"

const Home = () => {
    const [visible, cambiarVisibilidad] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset > 250) {
                cambiarVisibilidad(true);
            } else {
                cambiarVisibilidad(false);
            }
        };
    }, []);

    const scroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <>
            <Nav />
            <Information />
            <OurServices />
            <AboutUs />
            <OurExperiences />
            <Statistics />
            <Gallery />
            <Faq />
            <Team />
            <ContactUs />
            <Footer></Footer>

            {/* Boton para que el usuario sea enviado al principio de la pagina */}
            <section>
                {visible && (
                    <>
                        {/* Botón en la parte inferior derecha */}
                        <button onClick={scroll} className={'z-50 fixed bottom-8 right-8 bg-blueLightTwo text-white px-2 py-2 rounded-full transition-transform duration-300 hover:text-black hover:bg-yellowLightTwo hover:scale-110'}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeWidth={1} d="M16 15a1 1 0 0 1-.707-.293L12 11.414l-3.293 3.293a1 1 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4A1 1 0 0 1 16 15z" />
                            </svg>
                        </button>

                        {/* Botón en la parte inferior izquierda */}
                        <a href="https://drive.google.com/file/d/1zJ0Y_YTSnCHDiVkqeyCFU_6gydVVyqc7/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                            <button className="z-50 fixed bottom-8 left-8 bg-blueLightTwo text-white px-2 py-2 rounded-full transition-transform duration-300 hover:text-black hover:bg-yellowLightTwo hover:scale-110">
                                <img src={picManual} className="h-15 w-12" alt="Manual de Usuario" />
                            </button>
                        </a>
                    </>
                )}
            </section>
            {/* ------------------- */}
        </>
    )
}

export default Home
