import React  from 'react';
import { useParams } from 'react-router';

const User = () => {
    //hooks
    //console.log(useParams());
    const{id} = useParams();

    const [pueblo, setPueblo] = React.useState([])
    React.useEffect( () => {
        obtenerDatos()
    },[]);
    //Llamado a la api
    const obtenerDatos = async() => {
        //const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await fetch(``)
        const users = await data.json()//tenemos la info a JSON
        //console.log(users)
        setEquipo(users.civilizations)
    }

    return(
        <h1>Users</h1>
    );
}
export default User