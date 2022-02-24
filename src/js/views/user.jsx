import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

const User = (props) => {

    useEffect(() => {

    },[])



    return (
        <div className="col-3">
                    <div class="card" >
  <img src={props.picture} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text">
        <strong>Phone:</strong> <br />
         {props.phone} <br />
        <strong>Email:</strong> <br />
        {props.email}<br />
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>



    )

}

User.proptypes ={
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    picture: PropTypes.string,
}
export default User