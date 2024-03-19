import { useState, useEffect } from "react";
import { getRutas } from "../../api/rutas";

const Rutas = () => {
  const [rutas, setRutas] = useState([]);

  useEffect(() => {
    fetchRutas();
  }, []);

  const fetchRutas = async () => {
    const response = await getRutas();
    console.log(response.data.ruta);
    setRutas(response.data.ruta);
  };

  return (    
    <>
  <div className="px-5 py-4">
    <h1 className="text-3xl py-8 text-white font-bold mb-4">Ultimas Rutas hechas por los usuarios</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {rutas.map((ruta) => (
        <div key={ruta._id} className="relative">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition hover:scale-105">
            <img src={ruta.FotoRuta} className="w-full h-48 object-cover" alt="Ruta"/>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Nombre de la Ruta: {ruta.NombreRuta}</h2>
              <p className="text-gray-600 mb-1">Calificación: {ruta.CalificacionRuta}</p>
              <p className="text-gray-600 mb-1">Descripción: {ruta.DescripcionRuta}</p>
              <p className="text-gray-600 mb-1">Km totales: {ruta.KmTotalesRuta}</p>
              <p className="text-gray-600 mb-1">Presupuesto: {ruta.PresupuestoGas}</p>
              <p className="text-gray-600 mb-1">Fecha: {new Date(ruta.createdAt).toLocaleDateString()}</p>
              <p className="text-gray-600 mb-1">Moto viajero: {ruta.motoviajero}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</>

  );
};

export default Rutas;
