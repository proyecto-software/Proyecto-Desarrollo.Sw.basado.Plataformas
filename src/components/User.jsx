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
    //Método Post
    const componentDidMount = ()=>{
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    }



    //retorno de la aplicación
    return(
        <div>
            <h3>{pueblo.name}</h3>
            <p>{pueblo.team_bonus}</p>
        </div>
    );
}
export default User