import React  from 'react';
import {
    
  useParams
  } from "react-router-dom";

const User = () => {
    //PARAMS
    const {id} = useParams();
    console.log(id)
    //Hook
    const [pueblo, setPueblo] = React.useState([])
    //UseEffect
    React.useEffect( () => {
    //Llamado a la api
        const obtenerDatos = async() => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)//get civilization for ID
            const civi = await data.json()
            setPueblo(civi)
        }        
        obtenerDatos()
    },[id]);

    //retorno de la aplicación
    return(
        <div>
            <h3>{pueblo.name}</h3>
            <p>{pueblo.team_bonus}</p>
        </div>
    );
}
export default User