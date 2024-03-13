import { useState } from 'react';

const Faq = () => {
    const [open, setOpen] = useState(null);

    const handleToggle = (index) => {
        setOpen(open === index ? null : index);
    };

    const questions = [
        {
            question: "Que es RPM?",
            answer: "El nombre de RPM es el acronimo de Rutas Para Moteros"
        },
        {
            question: "Puedo registrar mi moto como yo quiera?",
            answer: "Si claro!, en la aplicacion eres libre de poder registrar y guardar con los datos necesarios las motos que tu quieras para que las puedas usar, no es necesario que siempre uses una sola moto"
        },
        {
            question: "Que hace diferente la aplicacion a usar google maps?",
            answer: "Creemos fielmente que cada usuario es libre de elegir que herramienta usar para su viaje, no obstante en nuestra aplicacion encontraras elementos muy interesantes y de ayuda para que puedas realizar tu viaje con mayor comodidad, ta les como: un apartado de presupuesto generado en base a la eleccion de tu punto de inicio y punto de llegada y el consumo de tu motora. Un apartado de garaje el cual podras registrar y guardar tus motos para que seas libre de seleccionar la que quieras en cada viaje que realices. un apartado de tus rutas guardadas, el cual te permite guardar tus rutas y si asi lo deseas recomendarlas por la buena experiencia que tuviste"
        },        
        {
            question: "Montate en mi motora",
            answer: "pero vioasdji4enduya"
        },
    ];

    return (
        <>
            <div className="mx-auto px-5 py-20 bg-amarillo w-full">
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-4xl mt-5 tracking-tight">Preguntas frecuentes</h2>
                    <p className="text-neutral-500 text-xl mt-3">&#34;Conozca las preguntas mas frecuentes de nuestra comunidad&#34;</p>
                </div>
                <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
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
