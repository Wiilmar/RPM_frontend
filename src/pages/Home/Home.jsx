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
import Cookies from "../../components/Cookies"
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
                <button onClick={scroll} className={'fixed bottom-8 right-8 bg-blue-500 text-white hover:text-black hover:bg-amarillo px-2 py-2 rounded-full transition duration-300'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                    </svg>
                </button>
            )}
        </section>
        <Cookies />
        {/* ------------------- */}
      </>
    )
}

export default Home

/*
*TAREAS PENDIENTES 

toDo: Cambiar el Footer - V.2 
toDo: Hacer el manual de usuario
toDO: Hacer validaciones o restricciones en el PQRS - Wilman
toDO: Cambiar la paleta de colores del menu Hamburguesa
toDo: Lograr que en apartado de estadisticas los numeros esten vinculados a su respectiva cantidad de la base de de datos
toDO: Lograr que cuando el usuario haga hover en algunas de las cards de los integrantes de RPM este cambia por otra imagen
toDO: Crear un nuevo componente que se llame 'Politicas' para que el usuairo pueda leer nuestras politicas y directrices en el apartado Web
toDO: Crear las lineas curveadas de cada componente como esta establecido en el FIGMA.
toDO: En el dashboard en la parte de PQRS que el administrador pueda eliminar PQRS
-------------------------------------------------
toDO: Hacer que en el apartado de PQRS cuando la responsividad llegue a 1100px de ancho la iamgen de fondo cambie por otra
*/