import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
    console.log(props);
    /*vamos a ver el estado por medio de Hooks, son funcionalidades que nos ayudan a trabajar
    con el comportamineto de react 
    useState, que seria como utiliza el estado y tenemos useState para indicar que un
    componente va a tener estado*/

//tenemos const [nombreVariable, funcionaActualizar] = useState(valorInicial)
   // const [mostrar, actualizarMostrar] = useState(true)

   // const manejarClick = () =>  {
     //   console.log("Mostrar/Ocultar elemento", !mostrar);
     //   actualizarMostrar(!mostrar)
   // }

    return <section className="orgSection">
    <h3 className="title">Mi organización</h3>
    <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg