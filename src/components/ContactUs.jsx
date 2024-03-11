import picPQRS from "../image/Home/pic_pqrs.png"

const ContactUs = () => {
  return (
    <>
      <section id="Contactanos">
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 relative bg-center bg-cover"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${ picPQRS })`
          }}
        >
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
              <div className="text-center pb-6">
                <h1 className="text-3xl">Contactanos ome!</h1>
                <p className="text-gray-300">
                  Hablamelo pues
                </p>
              </div>
              <form>
                <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Nombre" name="name" />
                <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Correo" name="email" />
                <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Correo" name="email" />
                <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Telefono" name="_subject" />
                <textarea className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Escribi aqui" name="message" style={{ height: '121px' }}></textarea>
                <div className="flex justify-between">
                  <input className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Enviar ➤" />
                  <input className="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="reset" value="Restablecer" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs