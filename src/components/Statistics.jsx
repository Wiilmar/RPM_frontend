import { useState, useEffect } from 'react';
import { getUsers } from '../api/users';
import { getRutas } from '../api/rutas';
// import { useDownloadContext } from '../context/DownloadContext';

const Statistics = () => {
    const [userCount, setUserCount] = useState(0);
    const [rutaCount, setRutaCount] = useState(0);
    // const { apkDownloadCount } = useDownloadContext();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [userData, rutaData] = await Promise.all([getUsers(), getRutas()]);
                setUserCount(userData.data.length);
                setRutaCount(rutaData.data.ruta.length);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="text-gray-400 bg-blueLight body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-2xl text-2xl text-white">{userCount}</h2>
                        <p className="leading-relaxed">Usuarios</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-2xl text-2xl text-white">120</h2>
                        <p className="leading-relaxed">Visitas Web</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-2xl text-2xl text-white">32</h2>
                        <p className="leading-relaxed">Descargas</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-2xl text-2xl text-white">{rutaCount}</h2>
                        <p className="leading-relaxed">Rutas</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;