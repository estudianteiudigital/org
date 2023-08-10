import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from "./componentes/Header/Header"
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

//los hooks deben estar dentro de un componente o funcion, no se pueden utilizar fuera
//al momento de definirse, debe ser antes del return 
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzales",
    puesto: "Dev FullStack",
    fav: false
  }]) //Arreglo vacio para trabajar con una lista  

  const [equipos, actualizarEquipos] = useState([
       //Lista de equipos 
    {
      id: uuid(),
      titulo: "Programación", 
      colorPrimario: "#57C278",
      colorSecundario:"#D9F7E9"
    },
   {
    id: uuid(),
    titulo: "Front End",
    colorPrimario: "#82CFFA",
    colorSecundario:"#E8F8FF"
   },
   {
    id: uuid(),
    titulo: "Data Science",
    colorPrimario: "#A6D157",
    colorSecundario:"#F0F8E2"
   },
   {
    id: uuid(),
    titulo: "Devops",
    colorPrimario: "#E06B69",
    colorSecundario:"#FDE7E8"
   },
   {
    id: uuid(),
    titulo: "UX y Diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario:"#FAE9F5"
   },
   {
    id: uuid(),
    titulo: "Móvil",
    colorPrimario: "#FFBA05",
    colorSecundario:"#FFF5D9"
   },
   {
    id: uuid(),
    titulo: "Innovación y gestión",
    colorPrimario: "#FF8A29",
    colorSecundario:"#FFEEDF"
   }

 ])

  //despues del singo de pregunta , si se cumple se muestra, los dos puntos, es si no, no se muestra
  //vamos a utilizar Trenario que es --> la condicion ? seMuestra : noSe Muestra
  //    {mostrarFormulario ? <Formulario /> : <></>}

  //Tambien tenemos lo que se llama cortocircuito donde tenemos
  //la condicion signo de ampersand && y seMuestra
   const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
   }

   //Registrar colaborador
   const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //la siguiente funcion recibe el nuevo valor y lo va a actualizar
    //Muy utilizado el Spread operator, se utilizan tres puntos, el arreglo con los 3 puntos quiere decir que 
    // es una copia y ese valor debe estar guardado en el arreglo vacio que tenemos en la linea 12, 
    actualizarColaboradores([...colaboradores, colaborador])
   }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id); //filter recibe una funcion (colaborador) que a su vez recibe a cada uno de los colaboradores 
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actaulizar color de equipo
  const actualizarColor = (color, id) => {
   console.log("Actualizar: ", color, id);
   const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
   })
   actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
   console.log(nuevoEquipo);
   //Va a hacer una copia de los valores que tiene actualmente equipos y despues agrega un nuevo objeto y edste va a hacer que tome 
   //los datos que vienen en nuevo equipo...
   actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

    const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

/*para recorrer un arreglo en react internamente en el JSX utlizamso el metodo map */
//map recibe los datos y nos devuelve un nuevo arreglo, siempre hay que agregar una llava la trabajar con map
  return (
    <div>
    <Header />
    {mostrarFormulario && <Formulario 
      equipos={equipos.map((equipo) => equipo.titulo)}
    registrarColaborador={registrarColaborador} 
    crearEquipo={crearEquipo}
    /> }
    <MiOrg cambiarMostrar={cambiarMostrar} />

    { //si no colocamos las llaves que van despues del segundo parentesis, lo que sera el resultado es lo que viene despes de la flecha
    equipos.map((equipo) => <Equipo 
    datos={equipo} 
    key={equipo.titulo}
    colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
    //Colaboradpres es una prop, una propiedad,algo que se le manda al componente equipo  
    eliminarColaborador={eliminarColaborador}
    actualizarColor={actualizarColor}
    like={like}
    />)  
   
    }
    <Footer/>

    </div>  
  );

}
export default App;
