/*
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function PanelDashBoard() {
  return (
    <Paper sx={{ maxWidth: '100%', margin: 'auto', overflow: 'hidden' }}>
      
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        DASHBOARD
      </Typography>
    </Paper>
  );
}

*/

/////

import React,{useState,useEffect} from 'react'
import {Grid} from '@mui/material';
import Cards from './CardDashboard';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import {
  BrowserRouter as Router,
  Route,
  useParams,
  Link,
  Switch
  } from "react-router-dom";

  const endpoint_dashboard = "http://localhost:10000/ucn/Dashboard?semestre=2021-1"

  
  const electivos = [
    {
      nombre: "Redes",
      cantidad_alumnos: -10,
    }, 
    {
      nombre: "SAP",
      cantidad_alumnos: 1,
    },
    {
      nombre: "Sistemas de Recomendacion",
      cantidad_alumnos: 32,
    },
  ];

  export default function PanelDashBoard() {

    const {id} = useParams();
    const [dashboard,setDashboard] = useState([])
    //End Poinst

    //UseEffect
    React.useEffect( ()=>{
      const obtenerDatos = async() => {
        try{
          const data = await fetch(endpoint_dashboard)
          const dash_json = await data.json()
          setDashboard(dash_json)
        }catch(error){
          console.error("Error API GET - Dashboard: ", error)
      }
      }
      obtenerDatos()
    }, [id]);

    return (
      <Paper sx={{ maxWidth: '100%', margin: 'auto', overflow: 'hidden' }}>
        <Typography sx={{ my: 2, mx: 2,fontSize:30 }} color="text.secondary" align="center">
        DASHBOARD
      </Typography>
      <Grid container spacing={3} align="center" alignItems="center" justifyContent="center" marginTop={3}>
              <Grid container spacing={3} align="center" alignItems="center" justifyContent="center" elevation={20}>
                  {Array.from(Array(dashboard.length)).map((_, index) => (
                    
                    <Grid item xs={12} sm={5} md={5} lg={5} xl={5} key={index} elevation={20} marginBottom={3}>
                       <Cards titulo={dashboard[index].nombre} texto={dashboard[index].cantidad_alumnos}/>
                    </Grid>
                  ))}
              </Grid>
              
              
</Grid>
          </Paper>
    );
}

//export default Dashboard;