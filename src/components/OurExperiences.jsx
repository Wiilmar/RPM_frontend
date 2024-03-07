//----- Importacion de imagenes
import sujetoUno from "../image/sujetoUno.jpg"
import sujetoDos from "../image/sujetoDos.jpg"
import sujetaTres from "../image/sujetaTres.jpg"

const OurExperiences = () => {
    return(
        <>
        <section>
            <div id="experiencias" className="relative items-center w-full px-5 py-7 mx-auto md:px-12 lg:px-24 max-w-7xl pb-20">
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
        </>
    )
}

export default OurExperiences