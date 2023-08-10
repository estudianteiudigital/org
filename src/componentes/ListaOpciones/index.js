import "./ListaOpciones.css"

const ListaOpciones = (props) => {
/*Metodo muy importante dentro de los arreglos, para recorrer un arreglo, y es el metodo Map
map -> "nombredelafuncion" arreglo.map() -__quedaria--- map arreglo.map()
lo que recibe es lo que conocemos como una funcion callback, ejemplo  (va el dato del equipo, y el index, o sea la posicion)
map -> arreglo.map( (equipo, index ) => { 
return <option></option> vamos a retornar en este caso un option 
"NOTA"entonces, el map toma un arreglo de informacion y a partir de ello, lo transforma y nos develve otro arreglo
})
*/


const manejarCambio = (e) => {
    console.log(e.target.value);
    props.actualizarEquipo(e.target.value)
}

/*Cuando utilicemos el metodo map .map, dedemos colocar una key a los elementos que vamos a
regresar la propiedad key , index es la posicion del elemento dentro del arreglo*/
    return <div className="lista-opciones"> 
    <label>Equipos</label>
    <select value={props.valor} onChange={manejarCambio}>
    <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
        {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
    </select>
    </div>
}

export default ListaOpciones