import { useState, useEffect } from "react";
import { getUsers, updateUserStatus } from "../../api/users";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  const CambiarEstado = async (userId) => {
    const updatedUsers = users.map((user) => {
      if (user._id === userId) {
        const estadoNuevo = !user.Estado;
        updateUserStatus(userId, estadoNuevo);
        return { ...user, Estado: estadoNuevo };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  return (
    <div className="container mx-auto py-8 px-5">
      <h1 className="text-3xl text-white font-bold mb-6 text-left">Gestión de usuarios</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">Foto de usuario</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Número de Identificación</th>
              <th className="px-4 py-2">Fecha de Nacimiento</th>
              <th className="px-4 py-2">Estado</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="bg-white border-b hover:bg-gray-200 transition duration-300"
              >
                <td className="px-4 py-2 flex items-center justify-center">
                  <img src={user.ImageUser} alt={user.Nombres_Mv} className="w-16 h-16 rounded-full object-cover" />
                </td>
                <td className="px-4 py-2 text-center">{user.Nombres_Mv}</td>
                <td className="px-4 py-2 text-center">{user.Email_Mv}</td>
                <td className="px-4 py-2 text-center">{user.NumeroIdent_Mv}</td>
                <td className="px-4 py-2 text-center">
                  {new Date(user.FechaNac_Mv).toLocaleDateString('es-ES')}
                </td>
                <td className="px-4 py-2 text-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${user.Estado ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
                    {user.Estado ? "Activo" : "Inactivo"}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button onClick={() => CambiarEstado(user._id)} className={`w-full h-full px-3 py-1 rounded-md text-sm font-semibold ${user.Estado ? "bg-red-500 text-white hover:bg-red-600" : "bg-green-500 text-white hover:bg-green-600"}`}>
                    {user.Estado ? "Desactivar" : "Activar"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;