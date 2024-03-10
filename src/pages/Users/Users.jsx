import {useState, useEffect} from "react";
import { getUsers } from "../../api/users";

const Users=()=>{
    const [users, setUsers]=useState([])

    useEffect(()=>{
        fetchUsers();
    },[])

    const fetchUsers=async()=>{
        const response=await getUsers();
        setUsers(response.data)
        console.log(response.data)
    }

    return(
        <>
            <h1>Usuarios</h1>
            <br />
            {users.map((user)=>(
                <div key={user._id}>
                    <p className="bg-amarillo ">{user.Nombres_Mv}</p>
                    <p className="bg-azulclaro">{user.Email_Mv}</p>
                    <p className="bg-azulclaro">{user.NumeroIdent_Mv}</p>
                    <p className="bg-azulclaro">{user.FechaNac_Mv}</p>
                </div>
            ))}
        </>
    )
}

export default Users