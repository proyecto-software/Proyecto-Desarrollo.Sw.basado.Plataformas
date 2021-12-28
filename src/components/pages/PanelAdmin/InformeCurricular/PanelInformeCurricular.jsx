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

const endpoint_infoCurricular = "";

export default function PanelInformeCurricular() {


  const [search, setSearch] = React.useState("");
  const [infoAlumno, setinfoAlumno] = React.useState(null);
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

  return (
    <Paper sx={{ maxWidth: '100%', margin: 'auto', overflow: 'hidden' }} >
      <Typography sx={{ my: 2, mx: 2,fontSize:30 }} color="text.secondary" align="center">
      Informe Curricular
    </Typography>
    
    <Grid container spacing={1}  justifyContent="center" marginTop={32} margin="5%" maxWidth="90%">
      <div >
        <Box sx={{ p: 0.5, border: 'inset' }} > 
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
        <IconButton type="submit"  aria-label="search" onClick={requestInfoCurricular} align="right">
          <SearchIcon sx={{ fontSize: '2.5rem' }} align="right"/>
        </IconButton>
        </Box>
      </div>
      </Grid>
      <Grid container spacing={1}  justifyContent="center" direction="column" marginTop={32} margin="5%" maxWidth="90%">
      <div>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical"/>
      {infoAlumno!==null && (
        <Typography sx={{ my: 2, mx: 2,fontSize:20 }} color="text.secondary">Alumno: {infoAlumno.nombre}</Typography>
      )}
      </div>
      <div>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical"/>
      {infoAlumno!==null && (
        <Typography sx={{ my: 2, mx: 2,fontSize:20 }} color="text.secondary">Rut: {infoAlumno.rut}</Typography>
      )}
      </div>
      <div>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical"/>
      {infoAlumno!==null && (
        <Typography sx={{ my: 2, mx: 2,fontSize:20 }} color="text.secondary">Correo: {infoAlumno.correo}</Typography>
      )}
      </div>
      <div>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical"/>
      {infoAlumno!==null && (
        <Typography sx={{ my: 2, mx: 2,fontSize:20 }} color="text.secondary">Carrera: {infoAlumno.id_carrera}</Typography>
      )}
      </div>
      <div>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical"/>
      {infoAlumno!==null && (
        <Typography sx={{ my: 2, mx: 2,fontSize:20 }} color="text.secondary">Semestre incompleto: {infoAlumno.semetre_incompleto}</Typography>
      )}
      </div>
  </Grid>

  </Paper>
  );
}