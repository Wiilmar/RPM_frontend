import { useState } from 'react';

const Faq = () => {
    const [open, setOpen] = useState(null);

    const handleToggle = (index) => {
        setOpen(open === index ? null : index);
    };

    const questions = [
        {
            question: "¿Que es R.P.M.?",
            answer: "El nombre 'RPM' es el acrónimo de 'Rutas Para Moteros'."
        },
        {
            question: "¿Tengo la libertad de registrar y utilizar las motos según mis preferencias?",
            answer: "Sí, por supuesto. En la aplicación, tienes la libertad de registrar y guardar la información necesaria de las motos que desees usar. No es necesario que utilices siempre la misma moto."
        },
        {
            question: "¿Qué diferencia a esta aplicación de usar Google Maps?",
            answer: "Valoramos la libertad de elección de cada usuario para su viaje. Sin embargo, deseamos destacar que ofrecemos una serie de herramientas que pueden hacer tu experiencia aún más placentera y conveniente. Entre estas funcionalidades, se incluye un apartado de presupuesto, el cual se genera automáticamente basado en la selección de tu punto de partida, destino y el consumo de combustible de tu moto. También disponemos de un práctico garaje virtual donde puedes almacenar y gestionar tus motocicletas, permitiéndote seleccionar la más adecuada para cada viaje. Además, ofrecemos un sistema de rutas guardadas que te permite almacenar tus trayectos preferidos y, si lo deseas, compartirlos con otros usuarios basándote en tu experiencia personal."
        }
        ,
        {
            question: "¿Disponen de algún manual de usuario para entender el funcionamiento de la página web?",
            answer: "¡Por supuesto! En nuestra sección web, encontrarás un detallado manual de usuario. Para descargarlo, simplemente haz clic en el botón con el logo de un manual ubicado en la esquina inferior izquierda."
        },
    ];

    return (
        <>
            <div className="mx-auto px-5 py-20 bg-amarillo w-full">
                <div className="flex flex-col items-center mt-44">
                    <h2 className="font-bold text-4xl tracking-tight text-center">Preguntas frecuentes</h2>
                    <p className="text-black text-xl mt-4 mb-6 text-center">&#34;Conozca las preguntas mas frecuentes de nuestra comunidad&#34;</p>
                </div>
                <div className="grid divide-y divide-white max-w-xl mx-auto mt-8 mb-56">
                    {questions.map((item, index) => (
                        <div key={index} className="py-5">
                            <details className="group">
                                <summary onClick={() => handleToggle(index)} className="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span>{item.question}</span>
                                    <span className={`transition ${open === index ? 'rotate-180' : ''}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className={`text-neutral-600 mt-3 ${open === index ? 'animate-fadeIn' : ''}`}>{item.answer}</p>
                            </details>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Faq;
