import { useState } from "react";
import "./Campo.css";

/*Las props son datos que le podemos mandar a los componentes y a 
partir de esos datos podemos hacer que tengan un determinado comportamiento
"Son propiedades externas que recibe un componente de React, Gracias
 a estas propiedades conseguiremos modificar o enviar información a nuestros componentes".*/ 
const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`

    //Destructuracion 
    const { type = "text" } = props

    const manejarCambio = (e) => {
        //event.target.value es muy utilizado
        props.actualizarValor(e.target.value); //Capturando el valor y actualizamos el estado
    }

    return <div className={`campo campo-${type}`}>
    <label>{ props.titulo }</label>
    <input placeholder={placeholderModificado}
           required={props.required} 
           value={props.valor}
           onChange={manejarCambio}
           type={type}
           />
    </div>
}

export default Campo