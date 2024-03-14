import { useState, useEffect } from 'react';

// Importacion de imagenes
//import pic_cookie from '../image/Home/pic_cookie.png';

function Cookies() {
    const [visible, cambiarVisibilidad] = useState(true);

    useEffect(() => {
        const cookiesAceptados = localStorage.getItem('cookiesAceptados');
        if (cookiesAceptados) {
            cambiarVisibilidad(false);
        }
    }, []);

    const cambiosLocales = () => {
        localStorage.setItem('cookiesAceptados', 'true');
        cambiarVisibilidad(false);
    };

    return visible && (
        <section className="fixed bottom-0 w-full bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 py-8 mx-auto lg:flex lg:items-center lg:gap-x-16">
                <p className="text-gray-600 dark:text-gray-300">Al hacer clic en &#34;Aceptar Todas las Cookies&#34;, aceptas el almacenamiento de cookies en tu dispositivo para mejorar la navegación del sitio, analizar el uso del sitio y ayudar en nuestros esfuerzos de marketing.</p>

                <div className="flex items-center mt-6 gap-x-4 lg:gap-x-8 shrink-0 lg:mt-0">
                    <button className="w-1/2 text-sm text-gray-800 underline transition-colors duration-300 md:w-auto dark:text-white dark:hover:text-gray-400 hover:text-gray-600 focus:outline-none">
                        Configuración de Cookies
                    </button>

                    <button onClick={cambiosLocales} className="w-1/2 md:w-auto font-medium bg-gray-900 rounded-lg hover:bg-gray-900/80 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                        Aceptar Todas las Cookies
                    </button>
                </div>
            </div>
        </section>

    );
}

export default Cookies;
