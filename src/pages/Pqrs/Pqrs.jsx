import { useState, useEffect } from "react";
import { getPQRS } from "../../api/pqrs";

const LasPreguntas = () => {
  const [pqrs, setPqrs] = useState([]);

  useEffect(() => {
    fetchPQRS();
  }, []);

  const fetchPQRS = async () => {
    const response = await getPQRS();
    console.log(response.data);
    setPqrs(response.data);
  };

  return (
    <>
      <h1>Preguntas</h1>
      {pqrs.map((pqrs) => (
        <div key={pqrs._id}>    
        <p>{pqrs.nombreusuario}</p>        
        <p>{pqrs.asuntopqrs}</p>
        <p>{pqrs.emailusuario}</p>
        <p>{pqrs.textopqrs}</p>               
        </div>
      ))}
    </>
  );
};

export default LasPreguntas;