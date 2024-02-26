import React, { useState, useEffect } from "react";
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
      <h1>Rutas</h1>
      {rutas.map((ruta) => (
        <div key={ruta._id}>
          <img src={ruta.FotoRuta} alt="" />
          <p>{ruta.NombreRuta}</p>
        </div>
      ))}
    </>
  );
};

export default Rutas;
