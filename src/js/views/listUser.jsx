import React, {useEffect, useState} from "react";
import User from "./user.jsx";

const ListUser = () => {

    const [users,setUsers] = useState([])
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=20')
        .then(res => res.json())
        .then(res =>{
            setUsers(res.results);

        })
    },[])

    return (
        <div className="container">
            <h4>Listado de usuarios:</h4>
            <div className="row">
                {users ? (
                    <User name="Maria" phone="123123123" email="maria@email.es" picture="" />

                ):("cargando usuarios...")}
                
            </div>
        </div>
    )

}

export default ListUser