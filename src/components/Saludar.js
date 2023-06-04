import React from "react";

export default function Saludar(){

    const saludar = () => {
        alert("Hola mundo")
    }

    return (
        <>
            <button onClick={saludar}>Saludar</button>
        </>
    )
}