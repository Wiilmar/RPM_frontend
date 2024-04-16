import { useState, useEffect } from "react";
import { getRutas, deleteRutas, getMotoviajeroPorId } from "../../api/rutas";
import Swal from 'sweetalert2';

const Rutas = () => {
  const [rutas, setRutas] = useState([]);

  useEffect(() => {
    fetchRutas();
  }, []);

  const fetchRutas = async () => {
    const response = await getRutas();
    const rutasWithMotoviajerName = await Promise.all(
      response.data.ruta.map(async (ruta) => {
        const motoviajero = await getMotoviajeroPorId(ruta.motoviajero);
        return {
          ...ruta,
          motoviajeroNombre: motoviajero.data.Nombres_Mv, 
        };
      })
    );
    setRutas(rutasWithMotoviajerName);
  };
  const handleDeleteRuta = async (id) => {
    try {
      await deleteRutas(id);
      await fetchRutas();
      Swal.fire({
        icon: 'success',
        title: 'Ruta eliminada',
        text: 'La ruta ha sido eliminada exitosamente.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
      });
    } catch (error) {
      console.error("Error al eliminar la ruta:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error al eliminar la ruta',
        text: 'Ha ocurrido un error al intentar eliminar la ruta.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
      });
    }
  };

  const renderStars = (calificacion) => {
    const stars = [];
    for (let i = 0; i < calificacion; i++) {
      stars.push(<span key={i} className="text-amarillo">&#9733;</span>);
    }
    return stars;
  };

  return (
    <>
      <div className="px-5 py-4">
        <h1 className="text-3xl py-8 text-white font-bold mb-4">Ultimas Rutas hechas por los usuarios</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-auto-rows-auto">
          {rutas.map((ruta) => (
            <div key={ruta._id} className="relative h-full">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition hover:scale-105 h-full">
                <img src={ruta.FotoRuta} className="w-full h-48 object-cover" alt="Ruta" />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">Nombre de la Ruta: {ruta.NombreRuta}</h2>
                  <div className="text-gray-600 mb-1">Calificación: {renderStars(ruta.CalificacionRuta)}</div>
                  <p className="text-gray-600 mb-1">Descripción: {ruta.DescripcionRuta}</p>
                  <p className="text-gray-600 mb-1">Kilómetros Totales: {Math.round(ruta.KmTotalesRuta)}</p>
                  <p className="text-gray-600 mb-1">Presupuesto: ${ruta.PresupuestoGas.toLocaleString('es-ES', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
                  <p className="text-gray-600 mb-1">Fecha: {new Date(ruta.createdAt).toLocaleDateString()}</p>
                  <p className="text-gray-600 mb-1">Moto viajero: {ruta.motoviajeroNombre}</p>
                </div>
                <div className="flex justify-center items-center p-4">
                  <button onClick={() => handleDeleteRuta(ruta._id)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Eliminar</button>
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
