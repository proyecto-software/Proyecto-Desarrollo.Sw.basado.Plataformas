import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import User from './User'
import { DataGrid } from '@mui/x-data-grid';
import {
  BrowserRouter as Router,
  Route,
  useParams,
  Link,
  Switch
  } from "react-router-dom";
export default function ContentForm() {
  //Params
  const {id} = useParams();
  console.log(id)
  //HOOKS
  const [Alumnos,setAlumnos] = useState([])
  //End Poinst

  //UseEffect
  React.useEffect( ()=>{
    const obtenerDatos = async() => {
        const data = await fetch('http://localhost:10000/ucn/solicitudes')
        const infoAlum = await data.json()
        setAlumnos(infoAlum)
    }
    obtenerDatos()
  }, [id]);
    //Variables Para GRID

    const columns = [
      {field:'rut_alumno',headerName:'Rut',width:90},
      {field:'carrera',headerName:'Carrera',width:90},
      {field:'indicador',headerName:'Indicador',width:90},
      {electivo:'electivo',headerName:'Electivo',width:90},
      {
        field: 'estado',
        headerName: 'Estado',
        width: 90,
        editable: true,
      }
    ];
    


  return (
    <Router>
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden'}}>
    <Typography sx={{ my: 2, mx: 2,fontSize:30 }} color="text.secondary" align="center">
        Formulario
      </Typography>
{/*             <ul>
                {
                  Alumnos.map( item =>(
                        <li key={item.id}>
                            <Link to={`/HomeAdmin/ContentForm/${item.id}`}>
                                {item.name} - {item.expansion} - {item.army_type}
                            </Link>
                        </li>
                    )
                  )
                }
            </ul> 
                        <Switch>
            <Route path="/HomeAdmin/ContentForm/:id" >
                    <User/>
            </Route>
            </Switch>
            
            */}
      <div style={{height: 400, width: '100%' }}>
      <DataGrid
        sx={{fontSize:20}}
        rows={Alumnos}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />

      </div>
    </Paper>
    </Router>
  );
}