import { useState, useEffect } from "react";
import { getPQRS } from "../../api/pqrs";

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

  return (
    /*
    <>
      <h1 >Preguntas</h1>

      <div>
        <select value={filtro} onChange={handleFilter}>
          <option value="">Todas las PQRS</option>
          <option value="Peticion">Petición</option>
          <option value="Queja">Queja</option>
          <option value="Reclamo">Reclamo</option>
          <option value="Sugerencia">Sugerencia</option>
        </select>
      </div>

      <div>
        <table >
          <thead >
            <tr>
              <th >Nombre</th>
              <th >Correo</th>
              <th >Tipo de PQRS</th>
              <th >Asunto</th>
              <th >Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredPQRS().map((pqr) => (
              <tr key={pqr._id}>
                <td >{pqr.nombreusuario}</td>
                <td >{pqr.emailusuario}</td>
                <td >{pqr.asuntopqrs}</td>
                <td >{pqr.textopqrs}</td>
                <td >
                  <button>Respondida</button>
                  <button>En Proceso</button>
                  <button>Sin Responder</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>*/
<div className="container mx-auto px-5 py-8">
  <h1 className="text-3xl text-white font-bold mb-6 text-center">Gestión de PQRS</h1>

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
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Correo</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo de PQRS</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asunto</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {filteredPQRS().map((pqr) => (
          <tr key={pqr._id} className="hover:bg-gray-100 transition-colors duration-200">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pqr.nombreusuario}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pqr.emailusuario}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pqr.asuntopqrs}</td>
            <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 max-w-sm truncate">{pqr.textopqrs}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <div className="flex space-x-2">
                <button className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Respondida</button>
                <button className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">En Proceso</button>
                <button className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Sin Responder</button>
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

