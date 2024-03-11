//----- Importacion de imagenes
import picMV from "../image/Home/pic_MVYecid.png"

const Information = () => {
    return (
        <>
        <section className="text-gray-400 bg-amarillo body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-5xl text-5xl mb-4 font-medium text-black">Rutas Para Moteros </h1>
              <p className="mb-8 leading-relaxed text-black sm:text-2xl text-2xl"> &#34;Descubre nuevas emociones en dos ruedas con R.P.M. <br className="hidden lg:inline-block" /> &#161;La gu&#237;a definitiva para explorar el mundo en moto&#33;&#34; </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-blueLight hover:text-white font-bold rounded text-lg"> Descargar </button>
                <a href="#Contactanos">
                <button className="ml-4 inline-flex text-white border-2 border-white py-2 px-6 focus:outline-none hover:bg-white-100 hover:text-black hover:border-black rounded text-lg"> Cont&#225;ctanos </button>
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
              <img className="object-cover object-center rounded" alt="hero" src={ picMV } />
            </div>
          </div>
        </section>
        </>
    )
}

export default Information