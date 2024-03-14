import { useState, useEffect } from "react";
import { getMotos } from "../../api/motos";

const Motos = () => {
  
  const [motos, setMotos] = useState([]);

  useEffect(() => {
    fetchMotos();
  }, []);

  const fetchMotos = async () => {
    try {
      const response = await getMotos();
      setMotos(response.data.moto);
      
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <>
      <h1>que</h1>
      <h2>so</h2>
      {motos.map((moto) => (
        <div key={moto._id}>          
          <p>{moto.MotoNombre}</p>
        </div>
      ))}
    </>
  );
};

export default Motos;