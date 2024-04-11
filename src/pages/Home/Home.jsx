//----- Importaciones de Hooks
import { useEffect, useState } from "react"

//----- Importacion de imagenes
// Ninguna por el momento

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
                    <button onClick={scroll} className={'z-50 fixed bottom-8 right-8 bg-blueLightTwo text-white px-2 py-2 rounded-full transition-transform duration-300 hover:text-black hover:bg-yellowLightTwo hover:scale-110'}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeWidth={1} d="M16 15a1 1 0 0 1-.707-.293L12 11.414l-3.293 3.293a1 1 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4A1 1 0 0 1 16 15z" />
                        </svg>
                    </button>
                )}
            </section>
            {/* ------------------- */}
        </>
    )
}

export default Home

/*
*TAREAS PENDIENTES 

toDo: Hacer el manual de usuario
toDO: Hacer validaciones o restricciones en el PQRS - Wilman

toDO: Lograr que cuando el usuario haga hover en algunas de las cards de los integrantes de RPM este cambia por otra imagen
toDO: Crear un nuevo componente que se llame 'Politicas' para que el usuairo pueda leer nuestras politicas y directrices en el apartado Web
toDO: Crear las lineas curveadas de cada componente como esta establecido en el FIGMA.
toDO: En el dashboard en la parte de PQRS que el administrador pueda eliminar PQRS
-------------------------------------------------
toDO: Hacer que en el apartado de PQRS cuando la responsividad llegue a 1100px de ancho la iamgen de fondo cambie por otra
*/