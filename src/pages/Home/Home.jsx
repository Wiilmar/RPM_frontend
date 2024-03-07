//----- Importaciones de Hooks
//import { useEffect, useState } from "react"

//----- Importacion de imagenes
// Ninguna por el momento

//----- Importacion de componentes
import Nav from "../../components/Nav"
import Information from "../../components/Information"
import OurServices from "../../components/OurServices"
import AboutUs from "../../components/AboutUs"
import OurExperiences from "../../components/OurExperiences"
import Team from "../../components/Team"
//import ContactUs from "../../components/ContactUs"
import Footer from "../../components/Footer"

const Home = () => {
    return (
      <>
        <Nav />
        <Information />
        <OurServices />
        <AboutUs />
        <OurExperiences />
        <Team />
        {/* <ContactUs /> */}
        <Footer></Footer>
        
        {/* Boton para que el usuario sea enviado al principio de la pagina */}
        <section>
            <a href="#">
                <button className={'fixed bottom-8 right-8 bg-blue-500 text-white hover:text-black hover:bg-amarillo px-2 py-2 rounded-full transition duration-300'}>
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