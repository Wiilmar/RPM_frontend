import { useState, useEffect } from "react";
import { getPQRS, deletePQRS, actualizarEstadoPQRS } from "../../api/pqrs";

//----- Importacion de imagenes
import pic_iconBasura from "../../image/DashBoard/pic_iconBasura.png"
// import pic_iconTime from "../../image/DashBoard/pic_iconTime.png"
import pic_iconCheck from "../../image/DashBoard/pic_iconCheck.png"

const LasPreguntas = () => {
  const [pqrs, setPqrs] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    fetchPQRS();
  }, []);

  const fetchPQRS = async () => {
    const response = await getPQRS();
    setPqrs(response.data);
  };

  const handleFilter = (event) => {
    setFiltro(event.target.value);
  };

  const filteredPQRS = () => {
    if (filtro === "") {
      return pqrs;
    } else {
      return pqrs.filter((pqr) => pqr.asuntopqrs === filtro);
    }
  };

  //Eliminar PQRS
  const handleEliminarPQRS = async (id) => {
    try {
      await deletePQRS(id);
      // Vuelve a cargar la lista de PQRS después de eliminar
      fetchPQRS();
    } catch (error) {
      console.error('Error al eliminar la PQRS:', error);
    }
  };

  const CambiarEstado = async (id, estado) => {
    try {
      await actualizarEstadoPQRS(id, !estado);      
      fetchPQRS();
    } catch (error) {
      console.error('Error al actualizar el estado de la PQRS:', error);
    }
  };

  return (
    <div className="container mx-auto px-5 py-8">
      <h1 className="text-3xl text-white font-bold mb-6 text-left">Gestión de PQRS</h1>

      <div className="mb-4 flex justify-between items-center">
        <select id="filter" value={filtro} onChange={handleFilter} className="block w-64 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mx-auto">
          <option value="">Todas las PQRS</option>
          <option value="Peticion">Petición</option>
          <option value="Queja">Queja</option>
          <option value="Reclamo">Reclamo</option>
          <option value="Sugerencia">Sugerencia</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Nombre</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Correo</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Tipo de PQRS</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Asunto</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPQRS().map((pqr) => (
              <tr key={pqr._id} className={`hover:bg-gray-100 transition-colors duration-200 ${pqr.estado === false ? 'bg-pendiente' : pqr.estado === true ? 'bg-verdemelamuerde' : ''}`}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pqr.nombreusuario}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pqr.emailusuario}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pqr.asuntopqrs}</td>
                <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 max-w-sm truncate">{pqr.textopqrs}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" onClick={() => CambiarEstado(pqr._id, pqr.estado)}>
                      <img src={pic_iconCheck} alt="Respondida" className="h-4 w-4" style={{ filter: 'invert(100%)' }}/>
                    </button>                  
                    <button className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" title="Borrar" onClick={() => handleEliminarPQRS(pqr._id)}>
                      <img src={pic_iconBasura} alt="Eliminar" className="h-4 w-4" style={{ filter: 'invert(100%)' }}/>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LasPreguntas;