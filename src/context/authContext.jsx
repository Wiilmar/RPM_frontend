import { createContext, useState, useContext, useEffect } from "react";
import { Login, Verify } from '../api/auth'
import Swal from 'sweetalert2';


export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth debe ser usado con AuthContext")
    }

    return context
}

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuth, setIsAuth] = useState(true)
    const [loading, setLoading] = useState(true)


    const singin = async (values) => {
        try {
            const res = await Login(values);
            console.log(res.data);
            setUser(res.data);
            sessionStorage.setItem('token', res.data.token);
            setIsAuth(true);
        } catch (error) {
            Swal.fire({
                icon: 'warning',
                title: 'Error de inicio de sesión',
                text: 'Las credenciales ingresadas son incorrectas. Por favor, inténtelo nuevamente.',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar',
            });
        }
    };

    const logout = () => {
        sessionStorage.removeItem('token');
        setIsAuth(false);
        setUser(null);
    };

    useEffect(() => {
        async function checkLogin() {
            const token = sessionStorage.getItem('token');



            if (!token) {
                setIsAuth(false);
                setLoading(false);
                return setUser(null);
            }
            try {
                const res = await Verify(token);
                if (!res.data) {

                    setIsAuth(true)
                    setLoading(false)
                    return;
                }
                setIsAuth(true)
                setUser(res.data)
                setLoading(false)

            } catch (error) {

                setIsAuth(false)
                setUser(null)
                setLoading(false)
            }
        }
        checkLogin()
    }, [])

    return (
        <AuthContext.Provider value={{
            singin,
            user,
            isAuth,
            loading,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}