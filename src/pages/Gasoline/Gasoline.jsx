/*import { useEffect, useState } from "react";
import { getGasoline } from "../../api/gasoline"

const Gasolina = () => {
    const [gasolinas, setGaso] = useState([]);
  
    useEffect(() => {
      fetchGasolina();
    }, []);
  
    const fetchGasolina = async () => {
      const response = await getGasoline();
      console.log(response.data.PrecioGas);
      setGaso(response.data.PrecioGas);
    };



    const click = () =>{
      console.log("hizo click")
    }
  
    return (
      <>
        <h1>Gasoline</h1> <br></br>
        {gasolinas.map((gasoline) => (
          <div key={gasoline._id}>  
            <p>{gasoline._id}</p>          
            <p>{gasoline.PrecioGas}</p>
            <p>{gasoline.__v}</p>
          </div>
        ))}
        <button className="bg-azulclaro" onClick={click}>Cambiar Precio Gasolina</button>
      </>
    );
  };
  
  export default Gasolina;
*/

import { useEffect, useState } from "react";
import { getGasoline, updateGasoline } from "../../api/gasoline";

const Gasolina = () => {
  const [gasolinas, setGaso] = useState([]);
  const [editingGasoline, setEditingGasoline] = useState(null);
  const [newPrecioGas, setNewPrecioGas] = useState("");

  useEffect(() => {
    fetchGasolina();
  }, []);

  const fetchGasolina = async () => {
    const response = await getGasoline();
    console.log(response.data.PrecioGas);
    setGaso(response.data.PrecioGas);
  };

  const handleEditClick = (gasoline) => {
    setEditingGasoline(gasoline);
    setNewPrecioGas(gasoline.PrecioGas);
  };

  const handlePrecioGasChange = (event) => {
    setNewPrecioGas(event.target.value);
  };

  const handleSaveClick = async () => {
    if (editingGasoline) {
      const updatedGasoline = { ...editingGasoline, PrecioGas: newPrecioGas };
      await updateGasoline(updatedGasoline);
      setEditingGasoline(null);
      fetchGasolina();
    }
  };

  return (
    <>
      <h1>Gasoline</h1>
      <br />
      {gasolinas.map((gasoline) => (
        <div key={gasoline._id}>
          <p>{gasoline._id}</p>
          {editingGasoline === gasoline ? (
            <input
              type="text"
              value={newPrecioGas}
              onChange={handlePrecioGasChange}
            />
          ) : (
            <p>{gasoline.PrecioGas}</p>
          )}
          <p>{gasoline.__v}</p>
          {editingGasoline !== gasoline && (
            <button onClick={() => handleEditClick(gasoline)}>
              Editar Precio Gasolina
            </button>
          )}
        </div>
      ))}
      {editingGasoline && (
        <button onClick={handleSaveClick}>Guardar cambios</button>
      )}
    </>
  );
};

export default Gasolina;


