import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {
  useParams,
  Link
  } from "react-router-dom";
export default function ContentForm() {
  //Params
  const {id} = useParams();
  console.log(id)
  //HOOKS
  const [Alumnos,setAlumnos] = useState([])
  //End Poinst
  const endpoints = {
    GetInfoFormulario: "http://localhost:10000/ucn/Infoformulario",
  }
  //UseEffect
  React.useEffect( ()=>{
    const obtenerDatos = async() => {
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const infoAlum = await data.json()
        setAlumnos(infoAlum.civilizations)
    }
    obtenerDatos()
  }, [id]);
    
  return (

    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
            <h1>Entregar información</h1>
            <ul>
                {
                  Alumnos.map( item =>(
                        <li key={item.id}>
                            <Link to={`/ContentForm/${item.id}`}>
                                {item.name} - {item.expansion}
                            </Link>
                        </li>
                    )
                    )
                }
            </ul>
      
    </Paper>
  );
}