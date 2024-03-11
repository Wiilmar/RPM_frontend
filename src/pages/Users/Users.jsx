

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
    console.log(response.data);
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
    /*
    <>
      <h1>Usuarios</h1>
      <br />
      {users.map((user) => (
        <div key={user._id}>
          <p className="bg-amarillo">{user.Nombres_Mv}</p>
          <img src={user.ImageUser}/>
          <p className="">{user.Email_Mv}</p>
          <p className="">{user.NumeroIdent_Mv}</p>
          <p className="">{user.FechaNac_Mv}</p>
          <p className="">{user.Estado ? "Activo" : "Inactivo"}</p>
          <button onClick={() => CambiarEstado(user._id)}>
            {user.Estado ? "Desactivar" : "Activar"}
          </button>
        </div>
      ))}
    </>*/
    <>
  <h1 className="text-3xl font-bold mb-6">Usuarios</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {users.map((user) => (
      <div
        key={user._id}
        className="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <img
          src={user.ImageUser}
          alt={user.Nombres_Mv}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{user.Nombres_Mv}</h2>
          <p className="text-gray-600 mb-2">{user.Email_Mv}</p>
          <p className="text-gray-600 mb-2">{user.NumeroIdent_Mv}</p>
          <p className="text-gray-600 mb-4">{user.FechaNac_Mv}</p>
          <div className="flex items-center justify-between">
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                user.Estado ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
              }`}
            >
              {user.Estado ? "Activo" : "Inactivo"}
            </span>
            <button
              onClick={() => CambiarEstado(user._id)}
              className={`text-sm font-semibold ${
                user.Estado ? "text-red-600 hover:text-red-800" : "text-green-600 hover:text-green-800"
              }`}
            >
              {user.Estado ? "Desactivar" : "Activar"}
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</>
  );
};

export default Users;



/*
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
    console.log(response.data);
  };

  const handleStatusChange = async (userId) => {
    try {
      await updateUserStatus(userId);
      const updatedUsers = users.map((user) =>
        user._id === userId ? { ...user, Estado: !user.Estado } : user
      );
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error al actualizar el estado del usuario:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Usuarios</h1>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-200 px-4 py-2 flex items-center">
          <p className="w-1/4 font-semibold">Nombres</p>
          <p className="w-1/4 font-semibold">Email</p>
          <p className="w-1/4 font-semibold">Número de Identificación</p>
          <p className="w-1/4 font-semibold">Fecha de Nacimiento</p>
          <p className="w-1/4 font-semibold">Estado</p>
          <p className="w-1/4"></p>
        </div>

        {users.map((user) => (
          <div
            key={user._id}
            className="px-4 py-2 flex items-center border-b border-gray-200 last:border-none"
          >
            <p className="w-1/4 truncate">{user["Nombres_Mv"]}</p>
            <p className="w-1/4 truncate">{user["Email_Mv"]}</p>
            <p className="w-1/4 truncate">{user["NumeroIdent_Mv"]}</p>
            <p className="w-1/4 truncate">{user["FechaNac_Mv"]}</p>
            <p className="w-1/4 truncate">{user.Estado ? "Activo" : "Inactivo"}</p>
            <button
              className={`w-1/4 px-2 py-1 rounded-md font-semibold ${
                user.Estado ? "bg-red-500 text-white" : "bg-green-500 text-white"
              }`}
              onClick={() => handleStatusChange(user._id)}
            >
              {user.Estado ? "Inactivar" : "Activar"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;*/