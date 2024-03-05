import { useState, useEffect } from "react";
import { getMotos } from "../../api/motos";

const Dashboard = () => {
  const [motos, setMotos] = useState([]);

  useEffect(() => {
    fetchMotos();
  }, []);

  const fetchMotos = async () => {
    try {
      const response = await getMotos();
      setMotos(response.data.moto);
      console.log(response.data.moto);
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <>
      <h1>Dashboard</h1>
      <h2>Motos:</h2>
      {motos.map((moto) => (
        <div key={moto._id}>
          <img src={moto.FotoMoto} width={'100px'} alt="motoIMG" />
          <p>{moto.MotoNombre}</p>
        </div>
      ))}
    </>
  );
};

export default Dashboard;
