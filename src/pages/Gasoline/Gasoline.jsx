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
    <div className="container mx-auto py-8 px-5">
      <h1 className="text-3xl text-white font-bold mb-6">Gasolina</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gasolinas.map((gasoline) => (
            <div key={gasoline._id} className="bg-white rounded-lg shadow-md p-6 relative">
              <h2 className="text-lg font-semibold mb-2">Precio Actual de la gasolina</h2>
              {editingGasoline === gasoline ? (
                <div>
                  <input type="text" value={newPrecioGas} onChange={handlePrecioGasChange} className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"/>              
                  <button onClick={handleSaveClick} className="bg-green-500 hover:bg-green-600 text-white font-bold w-full py-2 px-4 rounded">Guardar cambios</button>
                </div>
              ) : (
                <div>
                  <p className="text-2xl font-bold mb-4">{gasoline.PrecioGas}</p>
                    {editingGasoline !== gasoline && (
                    <button onClick={() => handleEditClick(gasoline)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded">Editar Precio Gasolina</button>
                    )}
                </div>
              )}
            </div>
          ))}
        </div>
    </div>
    );
};

export default Gasolina;


 /*


 
    <>
      <h1>Gasoline</h1>
      <br />
      {gasolinas.map((gasoline) => (
        <div key={gasoline._id}>
          
          {editingGasoline === gasoline ? (
            <input
              type="text"
              value={newPrecioGas}
              onChange={handlePrecioGasChange}
            />
          ) : (
            <p>{gasoline.PrecioGas}</p>
          )}          
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
    </>*/

