import React from "react";


export default function Card({id, flags, name, continent}){

    return(
        <div>
            <img src={flags} alt="aca debería estar la bandera" width="200px" height="150px"/>
            <h3>{name}</h3>
            <h5>Continente: {continent}</h5>
        </div>
    )
}