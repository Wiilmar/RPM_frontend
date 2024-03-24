import picMV from "../image/Home/pic_MVYecid.png";

const Information = () => {
  return (
    <>
      <section className="text-gray-400 bg-amarillo body-font relative">
        <div className="absolute inset-x-0 bottom-0">
          <svg className="w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffd149" fillOpacity="1" d="M0,224L60,234.7C120,245,240,267,360,272C480,277,600,267,720,234.7C840,203,960,149,1080,138.7C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
        {/* Segunda ola */}
        <div className="absolute inset-x-0 bottom-0" style={{ bottom: '-10px' }}>
          <svg className="w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffecb9" fillOpacity="1" d="M0,224L60,234.7C120,245,240,267,360,272C480,277,600,267,720,234.7C840,203,960,149,1080,138.7C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
        <div className="absolute inset-x-0 bottom-0" style={{ bottom: '-20px' }}>
          <svg className="w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" fillOpacity="1" d="M0,224L60,234.7C120,245,240,267,360,272C480,277,600,267,720,234.7C840,203,960,149,1080,138.7C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-black">Rutas Para Moteros</h1>
            <p className="mb-8 leading-relaxed text-black sm:text-xl text-xl">&#34;Descubre nuevas emociones en dos ruedas con R.P.M.<br className="hidden lg:inline-block" />¡La guía definitiva para explorar el mundo en moto&#33;&#34;</p>
            <div className="flex justify-center z-10">
              <a href="#download"><button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-blueLight hover:text-white font-bold rounded text-lg">Descargar</button></a>
              <a href="#Contactanos"><button className="ml-4 inline-flex text-white border-2 border-white py-2 px-6 focus:outline-none hover:bg-white-100 hover:text-black hover:border-black rounded text-lg">Cont&#225;ctanos</button></a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 relative z-10">
            <img className="object-cover object-center rounded" alt="hero" src={picMV} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Information;