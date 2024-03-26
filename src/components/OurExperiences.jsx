//----- Importacion de imagenes
import sujetoUno from "../image/Home/pic_perfilUserUno.jpg"
import sujetoDos from "../image/Home/pic_perfilUserDos.jpg"
import sujetaTres from "../image/Home/pic_perfilUserTres.jpg"

const OurExperiences = () => {
    return(
        <>
        <section id="experiencias" className="my-32">
            <div className="relative items-center w-full px-5 py-7 mx-auto md:px-12 lg:px-24 max-w-7xl pb-20">
                <div className="flex flex-col text-center w-full mb-20 ">
                    <h1 className="text-4xl font-bold title-font py-10 text-black">¡Nuestras Experiencias!</h1>
                </div>

                <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-3">
                    <div className="p-6">
                        <img src={ sujetoUno } className="h-28 border border-gray-300 rounded-lg" />
                        <h2 className="mx-auto py-4 text-2xl font-medium leading-none tracking-tighter text-amarilloTitle lg:text-3xl">Jack Ryder</h2>
                        <p className="mx-auto text-xl leading-relaxed text-gray-500 text-alain-left">RPM hizo que mi viaje en moto fuera incre&iacute;blemente suave. Con su ayuda, pude trazar rutas emocionantes a trav&eacute;s de paisajes impresionantes y descubrir lugares incre&iacute;bles en cada parada. &iexcl;Definitivamente es la aplicaci&oacute;n perfecta para cualquier motoviajero!</p>
                    </div>
                    <div className="p-6">
                        <img  src={ sujetoDos }  className="h-28 border border-gray-300 rounded-lg"/>
                        <h2 className="mx-auto py-4 text-2xl font-medium leading-none tracking-tighter text-amarilloTitle lg:text-3xl">Alexander Kornovich</h2>
                        <p className="mx-auto text-xl leading-relaxed text-gray-500 text-alain-left">Fue mi compa&ntilde;ero constante en mi traves&iacute;a en moto. Me mantuvo en el camino correcto, me alert&oacute; sobre condiciones peligrosas y me ayud&oacute; a encontrar los mejores lugares para descansar y disfrutar del paisaje. &iexcl;Una aplicaci&oacute;n imprescindible para cualquier motoviajero aventurero!</p>
                    </div>
                    <div className="p-6">
                        <img  src={ sujetaTres }  className="h-28 border border-gray-300 rounded-lg"/>
                        <h2 className="mx-auto py-4 text-2xl font-medium leading-none tracking-tighter text-amarilloTitle lg:text-3xl">Alejandra Rodriguez</h2>
                        <p className="mx-auto text-xl leading-relaxed text-gray-500 text-alain-left">Con su ayuda, pude planificar rutas emocionantes y seguras, encontrar alojamiento y restaurantes de calidad, y disfrutar al m&aacute;ximo de cada destino. &iexcl;Recomendar&iacute;a esta aplicaci&oacute;n a cualquier motoviajero que quiera una experiencia inolvidable!</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default OurExperiences