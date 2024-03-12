import { useState } from 'react';
import picPQRS from "../image/Home/pic_pqrs.png";
import { enviarPQRS } from '../api/pqrs';

const ContactUs = () => {
  const [formValues, setFormValues] = useState({
    full_name: '',
    email: '',
    pqrs_type: '',
    message: ''
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { full_name, email, pqrs_type, message } = formValues;

    try {
      const response = await enviarPQRS({
        nombreusuario: full_name,
        emailusuario: email,
        asuntopqrs: pqrs_type,
        textopqrs: message
      });

      console.log(response.data);

      // Reiniciar los valores del formulario después de enviarlo con éxito
      setFormValues({
        full_name: '',
        email: '',
        pqrs_type: '',
        message: ''
      });

      // Mostrar la alerta de éxito
      setShowSuccessAlert(true);

      // Ocultar la alerta después de 5 segundos
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 4000);

    } catch (error) {
      console.error('Error al enviar los datos:', error);
      // Mostrar la alerta de error
      setShowErrorAlert(true);

      // Ocultar la alerta de error después de 5 segundos
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 4000);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  return (
    <section id="Contactanos">
      {/* Contenido del formulario */}
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 relative bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${picPQRS})`
        }}
      >
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-center pb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">¡Contáctanos!</h1>
              <p className="text-lg text-gray-700">Háblanos, estamos aquí para ayudarte.</p>
            </div>
            {/* Alertas */}
            {showSuccessAlert && (
              <div className="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">¡Info!</span> Tu respuesta en el PQRS ha sido enviada.
                </div>
              </div>
            )}
            {showErrorAlert && (
              <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">¡!</span> Tu respuesta en el PQRS ha sido errónea.
                </div>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Nombre completo" name="full_name" value={formValues.full_name} onChange={handleInputChange} required />
              <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Correo electronico" name="email" value={formValues.email} onChange={handleInputChange} required />
              <div className="mb-4 appearance-none rounded w-full py-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <select id="pqrs_type" name="pqrs_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" value={formValues.pqrs_type} onChange={handleInputChange} required>
                  <option value="" disabled selected>Tipo de PQRS</option>
                  <option value="Peticion">Petición</option>
                  <option value="Queja">Queja</option>
                  <option value="Reclamo">Reclamo</option>
                  <option value="Sugerencia">Sugerencia</option>
                </select>
              </div>
              <textarea className="shadow mb-4 min-h-0 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Escribe aquí tu mensaje" name="message" style={{ maxHeight: '200px', overflowY: 'auto' }} value={formValues.message} onChange={handleInputChange} required />
              <div className="flex justify-between">
                <input className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Enviar ➤" />
                <input className="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="reset" value="Restablecer" onClick={() => setFormValues({
                  full_name: '',
                  email: '',
                  pqrs_type: '',
                  message: ''
                })} />
              </div>
            </form>

          </div>
        </div>
      </div>
    </section >
  );
};

export default ContactUs;
