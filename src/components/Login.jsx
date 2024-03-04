const LoginAdmin = () => {
    return(
        <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="w-full max-w-xl mx-auto lg:w-96">                        
                <div>                
                    <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">Iniciar Sesion</h2>
                </div>

                <div className="mt-8">
                    <div className="mt-6">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label  className="block text-sm font-medium text-neutral-600">Correo Electronico</label>
                                    <div className="mt-1">
                                        <input id="email" name="email" type="email" required="" placeholder="Ingresa tu correo electronico" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                    </div>
                            </div>

                            <div className="space-y-1">
                                <label  className="block text-sm font-medium text-neutral-600">Contraseña</label>
                                    <div className="mt-1">
                                        <input id="password" name="password" type="password" required="" placeholder="Ingresa tu contraseña" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                    </div>
                            </div>

                            <div className="flex items-center justify-between">                                
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Olvidaste tu contraseña? </a>
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign in</button>
                            </div>

                        </form>                                                    
                    </div>
                </div>
            </div>
        </div>       
    )
}

export default LoginAdmin