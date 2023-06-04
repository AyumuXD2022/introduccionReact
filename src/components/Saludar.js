import React from "react";

export default function Saludar({saludar,userInfo : {nombre = "Anonimo", edad,color}}){

    return (
        <>
            <button onClick={()=>saludar(nombre,edad)}>Saludar</button>
        </>
    )
}