import { useState } from 'react';

const Faq = () => {
    const [open, setOpen] = useState(null);

    const handleToggle = (index) => {
        setOpen(open === index ? null : index);
    };

    const questions = [
        {
            question: "Pregunta 1",
            answer: "Respuesta"
        },
        {
            question: "Pregunta 2",
            answer: "Respuesta"
        },
    ];

    return (
        <>
            <div className="mx-auto px-5 bg-amarillo w-full">
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-5xl mt-5 tracking-tight">Preguntas frecuentes</h2>
                    <p className="text-neutral-500 text-xl mt-3">Conozca las preguntas mas frecuentes de nuestra comunidad</p>
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
