import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {Button, Grid,Box} from '@mui/material';
import TextField from '@mui/material/TextField';

import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
<<<<<<< HEAD
=======
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonIcon from '@mui/icons-material/Person';
import { borderBottom, fontSize } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
>>>>>>> new-front-dionisio


export default function PanelInformeCurricular() {


  const [search, setSearch] = React.useState("");
  const [infoAlumno, setinfoAlumno] = React.useState(null);
  const [tablaInfoAlumno, setTablaInfoAlumno] = React.useState(null);
  const columns = [
    {field:'nrc',headerName:'NRC',width:70, align: 'center', flex: 1},
    {field:'nombre_ramo',headerName:'Ramo', flex: 3},
    
    {field:'semestre',headerName:'Semestre',width:70, align: 'center', flex: 1},
    {field:'nota',headerName:'Promedio',width:70, align: 'center', flex: 1},
    {field:'oportunidad',headerName:'Oportunidad',width:70, align: 'center', flex: 1.5},
  ]
  

  const handleInputChange = (event) => {
    setSearch(event.target.value)
    console.log(search)
  }
  const requestInfoCurricular = async() => {
    try{
      let rut = search
      let endpoint = "https://backend-electives.herokuapp.com/ucn/InformeCurricular?rut="+rut
      console.log(endpoint)
      const data = await fetch(endpoint);
      const data_json = await data.json()
      if(data_json.nombre !== ""){
        setinfoAlumno(data_json)
      }else{
        setinfoAlumno(null)
      }
      console.error(data_json)
    }catch(error){
        console.error("Error API POST - Info Curricular: ", error)
    }
  }

  const requestTablaInfoCurricular = async() => {
    try{
      let rut = search
      let endpoint = "https://backend-electives.herokuapp.com/ucn/TablaInformeCurricular?rut="+rut
      console.log(endpoint)
      const data = await fetch(endpoint);
      const data_json = await data.json()
      if(data_json !== null){
        setTablaInfoAlumno(data_json)
      }else{
        setTablaInfoAlumno(null)
      }
      console.error(data_json)
    }catch(error){
        console.error("Error API POST - Tabla Info Curricular: ", error)
    }
  }

  const requestInfoAlumno = async() => {
    await requestInfoCurricular()
    await requestTablaInfoCurricular()

    console.log("info: ",infoAlumno)
    console.log("tabla info: ",tablaInfoAlumno)
  }

  return (
    <Paper sx={{ maxWidth: '100%', margin: 'auto', overflow: 'hidden' }} >
      <Typography sx={{ my: 2, mx: 2,fontSize:30 }} color="text.secondary" align="center">
      Informe Curricular
    </Typography>
    
    <Grid container spacing={1}  justifyContent="center" marginTop={32} margin="5%" maxWidth="90%">
      <div >
        <Box  sx={{ borderRadius: 15, p: 0.5, border: 1 }}> 
        <InputBase 
          sx={{ ml: 2, flex: 1 }}
          placeholder="Buscar RUT alumno"
          onChange={handleInputChange}
          fontSize={10}
          
          style={{ 
            color: '#787878',
            fontSize:'2rem',
            
            }}
          //inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="submit"  aria-label="search" onClick={requestInfoAlumno} align="right">
          <SearchIcon sx={{ fontSize: '2.5rem' }} align="right"/>
        </IconButton>
        </Box>
      </div>
      </Grid>
      <Grid container spacing={1}  justifyContent="center" direction="column" marginTop={32} margin="5%" maxWidth="90%">

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical"/>
      {infoAlumno!==null && (
        <div align="center">
        
        <Box sx={{ p: 0.5, border:'' }} >
        <Grid container direction="column" justifyContent="space-between" maxWidth="80%">
          <Grid justifyContent="center" >
            <Grid container direction="row" justifyContent="space-around">
                <Grid alignContent="center" direction="column" justifyContent="space-between" >
                    <PersonIcon sx={{ fontSize: '10rem', marginTop:1}} ></PersonIcon>
                </Grid>
                <Divider orientation="vertical" variant="middle" flexItem component="" />
                <Grid direction="column" justifyContent="space-between" alignItems="center">
                  
                  <Grid container direction="row" justifyContent="space-between" >
                    <Typography sx={{ my: 2, mx: 2,fontSize:20 }} color="text.secondary">Alumno: </Typography>
                    <Typography sx={{ my: 2, mx: 2,fontSize:20 }} color="text.secondary">{infoAlumno.nombre}</Typography>
                  </Grid>
                  <Grid container direction="row" justifyContent="space-between" >
                    <Typography  sx={{ my: 2, mx: 2,fontSize:20 }} color="text.secondary">Rut: </Typography>
                    <Typography sx={{ my: 2, mx: 2,fontSize:20 }} color="text.secondary">{infoAlumno.rut}</Typography>
                  </Grid>
                </Grid>
            </Grid>
          </Grid>
          <Divider variant="middle" component="" />
          <Grid container direction="row" alignItems="center" justifyContent="space-between" alignContent="center">
              <Typography  sx={{ my: 2, mx: 2,fontSize:20 }} color="text.secondary">Correo: </Typography>
              <Typography sx={{ my: 2, mx: 2,fontSize:20 }} color="text.secondary">{infoAlumno.correo}</Typography>
          </Grid>
          <Divider variant="middle" component="" />
          <Grid container direction="row" alignItems="center" justifyContent="space-between" alignContent="center">
              <Typography sx={{ my: 2, mx: 2,fontSize:20 }} color="text.secondary">Carrera: </Typography>
              <Typography sx={{ my: 2, mx: 2,fontSize:20 }} color="text.secondary">{infoAlumno.carrera}</Typography>
          </Grid>
          <Divider variant="middle" component="" />
          <Grid container direction="row" alignItems="center" justifyContent="space-between" alignContent="center">
              <Typography  sx={{ my: 2, mx: 2,fontSize:20 }} color="text.secondary">Semestre incompleto: </Typography>
              <Typography sx={{ my: 2, mx: 2,fontSize:20 }} color="text.secondary">{infoAlumno.semetre_incompleto}</Typography>
          </Grid>
        </Grid>
        <Divider variant="middle" component=""/>
        {tablaInfoAlumno!==null && (
          <div style={{fontSize:2}}>
            <Grid maxWidth="80%" marginTop={5} height= {250}>
            <DataGrid
            maxWidth="50%"
              rows={tablaInfoAlumno}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[12]}
              //checkboxSelection
              disableSelectionOnClick
              
              //onCellEditStop = {async(params, event)=> console.log("e1: ",params.row)}
              
            />
            </Grid>
          </div>
        )}

        </Box>
        </div>
      )}
  </Grid>

  </Paper>
  );
}