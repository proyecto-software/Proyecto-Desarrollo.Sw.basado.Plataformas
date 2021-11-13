import React  from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
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
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const users = await data.json()//tenemos la info a JSON
        //console.log(users)
        setEquipo(users.civilizations)
    }
    return(
        <div>
            <h1>Api rest</h1>
            <ul>
                {
                    equipo.map( item =>(
                        <li key={item.id}>
                        <Link to={`/Nosotros/${item.id}`} >
                            {item.name} - {item.expansion}
                        </Link>
                        </li>
                    )
                    )
                }
            </ul>
        </div>
    );
}
export default Nosotros