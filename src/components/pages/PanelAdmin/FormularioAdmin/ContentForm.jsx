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
    //Variables Para GRID

    const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      {field:'rut',headerName:'Rut',width:90},
      



      {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
      },
      {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
      },
      {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
      },
      {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
          `${params.getValue(params.id, 'firstName') || ''} ${
            params.getValue(params.id, 'lastName') || ''
          }`,
      },
    ];
    
    const rows = [
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
      { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
      { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

  return (
    <Router>
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
            <h1>Entregar información</h1>
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

        rows={rows}
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