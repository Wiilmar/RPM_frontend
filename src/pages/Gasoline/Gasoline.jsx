import { useEffect, useState } from "react";
import { getGasoline, updateGasoline } from "../../api/gasoline";

// Importacion imagenes
import banderaCo from "../../image/DashBoard/pic_iconCO.png"

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
      <div className="grid">
        {gasolinas.map((gasoline) => (
          <div key={gasoline._id} className="bg-white rounded-lg shadow-md relative overflow-hidden mb-6 max-w-sm">
            {/* Contenedor del texto y la imagen */}
            <div className="flex items-center bg-blue-500 text-white px-4 py-2">
              <p className="text-base font-semibold flex-grow">Colombia</p>
              <img src={banderaCo} alt="Bandera de Colombia" className="w-7 h-7" />
            </div>
            {/* Resto del contenido de la tarjeta */}
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-2">Precio Actual de la gasolina</h2>
              {editingGasoline === gasoline ? (
                <div>
                  <input type="text" value={newPrecioGas} onChange={handlePrecioGasChange} className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4" />
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gasolina;