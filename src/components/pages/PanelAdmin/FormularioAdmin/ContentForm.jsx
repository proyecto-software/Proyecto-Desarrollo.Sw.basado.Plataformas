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
//import { DataGrid } from '@mui/x-data-grid';


const endpoints = {
  GetInfoFormulario: "http://localhost:10000/ucn/Infoformulario",

}
const [Info,setInfo] = useState([])
const getInformacionFormularios = async() => {
  try{
    // GET request using fetch with async/await
    const response = await fetch(endpoints.GetInfoFormulario);
    const data = await response.json();
    console.log("Formularios ",data)
    setElectivos(data)
  }catch(error){
    console.error("Error API GET Formulario ", error)
  }
}


export default function ContentForm() {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        No users for this project yet
      </Typography>
      
    </Paper>
  );
}