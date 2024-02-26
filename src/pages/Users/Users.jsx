import React, {useState, useEffect} from "react";
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
            {users.map((user)=>(
                <div key={user._id}>
                    <p>{user.Nombres_Mv}</p>
                </div>
            ))}
        </>
    )
}

export default Users