// import { useState, useEffect } from "react";
// import { getPQRS } from "../../api/pqrs";

// const LasPreguntas = () => {
//   const [pqrs, setPqrs] = useState([]);

//   useEffect(() => {
//     fetchPQRS();
//   }, []);

//   const fetchPQRS = async () => {
//     const response = await getPQRS();
//     console.log(response.data);
//     setPqrs(response.data);
//   };

//   return (
//     <>
//       <h1>Preguntas</h1>
//       {pqrs.map((pqrs) => (
//         <div key={pqrs._id}>    
//         <p>{pqrs.nombreusuario}</p>        
//         <p>{pqrs.asuntopqrs}</p>
//         <p>{pqrs.emailusuario}</p>
//         <p>{pqrs.textopqrs}</p>               
//         </div>
//       ))}
//     </>
//   );
// };

// export default LasPreguntas;







// import { useState, useEffect } from "react";
// import { getPQRS } from "../../api/pqrs";

// const LasPreguntas = () => {
//   const [pqrs, setPqrs] = useState([]);
//   const [filtro, setFiltro] = useState("");

//   useEffect(() => {
//     fetchPQRS();
//   }, []);

//   const fetchPQRS = async () => {
//     const response = await getPQRS();
//     setPqrs(response.data);
//   };

//   const handleFilter = (event) => {
//     setFiltro(event.target.value);
//   };

//   const filteredPQRS = () => {
//     if (filtro === "") {
//       return pqrs;
//     } else {
//       return pqrs.filter((pqr) => pqr.asuntopqrs === filtro);
//     }
//   };

//   return (
//     <>
//       <h1 className="text-2xl font-bold mb-4">Preguntas</h1>

//       <div className="mb-4">
//         <select
//           value={filtro}
//           onChange={handleFilter}
//           className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
//         >
//           <option value="">Filtrar por tipo de PQRS</option>
//           <option value="Peticion">Petición</option>
//           <option value="Queja">Queja</option>
//           <option value="Reclamo">Reclamo</option>
//           <option value="Sugerencia">Sugerencia</option>
//         </select>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full border-collapse border border-gray-200">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border border-gray-200 px-4 py-2">Nombre</th>
//               <th className="border border-gray-200 px-4 py-2">Correo</th>
//               <th className="border border-gray-200 px-4 py-2">Tipo de PQRS</th>
//               <th className="border border-gray-200 px-4 py-2">Asunto</th>
//               <th className="border border-gray-200 px-4 py-2">Acciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredPQRS().map((pqr) => (
//               <tr key={pqr._id}>
//                 <td className="border border-gray-200 px-4 py-2">{pqr.nombreusuario}</td>
//                 <td className="border border-gray-200 px-4 py-2">{pqr.emailusuario}</td>
//                 <td className="border border-gray-200 px-4 py-2">{pqr.asuntopqrs}</td>
//                 <td className="border border-gray-200 px-4 py-2">{pqr.textopqrs}</td>
//                 <td className="border border-gray-200 px-4 py-2">
//                   <button className="px-3 py-1 bg-green-500 text-white rounded-md mr-2">Respondida</button>
//                   <button className="px-3 py-1 bg-yellow-500 text-white rounded-md mr-2">En Proceso</button>
//                   <button className="px-3 py-1 bg-red-500 text-white rounded-md">Sin Responder</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default LasPreguntas;



import { useState, useEffect } from "react";
import { getPQRS } from "../../api/pqrs";

const LasPreguntas = () => {
  const [pqrs, setPqrs] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchPQRS();
  }, []);

  const fetchPQRS = async () => {
    const response = await getPQRS();
    console.log(response.data);
    setPqrs(response.data);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredPQRS = pqrs.filter((pqrs) =>
    filter ? pqrs.asuntopqrs === filter : true
  );

  return (
    <>
      <h1 className="text-4xl font-bold text-center text-gray-800 my-8">
        Preguntas
      </h1>
      <div className="flex justify-center items-center">
        <label className="mr-4" htmlFor="filter">
          Filtrar por asunto:
        </label>
        <select
          className="border border-gray-300 rounded-md px-4 py-2"
          id="filter"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="">Todos</option>
          <option value="Peticion">Petición</option>
          <option value="Queja">Queja</option>
          <option value="Reclamo">Reclamo</option>
          <option value="Solicitud">Solicitud</option>
        </select>
      </div>
      <div className="max-w-4xl mx-auto my-8">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 p-4 text-left text-gray-600">
                Nombre
              </th>
              <th className="border border-gray-300 p-4 text-left text-gray-600">
                Correo
              </th>
              <th className="border border-gray-300 p-4 text-left text-gray-600">
                Tipo
              </th>
              <th className="border border-gray-300 p-4 text-left text-gray-600">
                Asunto
              </th>
              <th className="border border-gray-300 p-4 text-left text-gray-600">
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredPQRS.map((pqrs) => (
              <tr key={pqrs._id}>
                <td className="border border-gray-300 p-4">{pqrs.nombreusuario}</td>
                <td className="border border-gray-300 p-4">{pqrs.emailusuario}</td>
                <td className="border border-gray-300 p-4">{pqrs.tipopqrs}</td>
                <td className="border border-gray-300 p-4">{pqrs.asuntopqrs}</td>
                <td className="border border-gray-300 p-4 flex justify-end space-x-2">
                  <button
                    className={`px-4 py-2 rounded-md ${
                      pqrs.estadopqrs === "Respondida"
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                    onClick={() => {
                      // actualizar el estado de la pqrs a respondida
                    }}
                  >
                    Respondida
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md ${
                      pqrs.estadopqrs === "En proceso"
                        ? "bg-yellow-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                    onClick={() => {
                      // actualizar el estado de la pqrs a en proceso
                    }}
                  >
                    En proceso
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md ${
                      pqrs.estadopqrs === "Sin responder"
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                    onClick={() => {
                      // actualizar el estado de la pqrs a sin responder
                    }}
                  >
                    Sin responder
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LasPreguntas;

