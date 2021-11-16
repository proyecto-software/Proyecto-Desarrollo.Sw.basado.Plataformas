import React, { Fragment }  from 'react';
import {
    Link
  } from "react-router-dom";
const Nosotros = () => {
    const [equipo, setEquipo] = React.useState([])
    React.useEffect( () => {
        //console.log('Use Eddfect');
        //document.title = 'Cambiamos el titulo';
        obtenerDatos()
    },[]);
    //Llamado a la api
    const obtenerDatos = async() => {
        //const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await fetch('http://localhost:10000/ucn/carreras')
        const users = await data.json()//tenemos la info a JSON
        //console.log(users)
        setEquipo(users)
    }
    return(
        <Fragment>
            <h1>Api rest</h1>
            <ul>
                {
                    equipo.map( item =>(
                        <li key={item.id}>
                            <Link to={`/Nosotros/${item.id}`}>
                                {item.id} - {item.nombre}
                            </Link>
                        </li>
                    )
                    )
                }
            </ul>
        
        </Fragment>
    )
}
export default Nosotros