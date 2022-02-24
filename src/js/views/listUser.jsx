import React from "react";
import User from "./user.jsx";

const ListUser = () => {
    return (
        <div className="container">
            <h4>Listado de usuarios:</h4>
            <div className="row">
                <User name="Maria" phone="123123123" email="maria@email.es" picture="" />
                <User />
                <User />
                <User />
                <User />
            </div>
        </div>
    )

}

export default ListUser