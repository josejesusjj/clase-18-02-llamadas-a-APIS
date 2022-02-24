import React, {useEffect, useState} from "react";
import User from "./user.jsx";

const ListUser = () => {

    const [users,setUsers] = useState([])
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=20')
        .then(res => res.json())
        .then(res =>{
            console.log(res.results)

        })
    },[])

    return (
        <div className="container">
            <h4>Listado de usuarios:</h4>
            <div className="row">
                <User name="Maria" phone="123123123" email="maria@email.es" picture="" />

            </div>
        </div>
    )

}

export default ListUser