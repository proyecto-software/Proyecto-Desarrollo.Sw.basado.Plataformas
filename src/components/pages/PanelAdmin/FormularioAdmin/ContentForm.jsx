import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import User from './User'
import { DataGrid } from '@mui/x-data-grid';
import {Button} from "@mui/material";
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
      {field:'id',headerName:'Id',width:90},
      {field:'rut_alumno',headerName:'Rut',width:90},
      {field:'carrera',headerName:'Carrera',width:90},
      {field:'indicador',headerName:'Indicador',width:90},
      {field:'electivo1',headerName:'Electivo1',width:90},
      {field:'estado1',headerName:'Estado1',width:90, editable:true, type:'boolean'},
      {field:'electivo2',headerName:'Electivo2',width:90},
      {field:'estado2',headerName:'Estado2',width:90, editable:true, type:'boolean'},
      {field:'electivo3',headerName:'Electivo3',width:90},
      {field:'estado3',headerName:'Estado3',width:90,editable:true, type:'boolean'},
    ];
    

  const handleChange = () => {
    console.log(Alumnos)
  }
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
      <div style={{height: 500, width: '100%' }}>
      <DataGrid
        
        rows={Alumnos}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        onPageChange = {handlePageChange}
        
      />

      </div>

      <Button type="submit" onClick={handleChange}></Button>
    </Paper>
    </Router>
  );
}