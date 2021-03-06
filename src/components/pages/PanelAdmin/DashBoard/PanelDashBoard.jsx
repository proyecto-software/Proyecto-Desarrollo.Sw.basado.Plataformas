import React,{useState} from 'react'
import {Grid, TextField, Autocomplete} from '@mui/material';
import Cards from './CardDashboard';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

  const endpoint_dashboard = "https://backend-electives.herokuapp.com/ucn/Dashboard?semestre="

  export default function PanelDashBoard(props) {

    const [dashboard,setDashboard] = useState([])
    const [semestre,setSemestre] = useState("")

    const handleAutocompleteChange = async (value) => {
      console.log("Value: ",value)
      setSemestre(value)
      console.log("Semestre: ",semestre)
      await obtenerDatos(value)
      
  }
    //End Poinst

    //UseEffect
    
      const obtenerDatos = async(sem) => {
        if(sem!==null){
          try{
            let endpoint = endpoint_dashboard + sem
            console.log(endpoint)
            const data = await fetch(endpoint)
            console.log("data: ",data)
            const dash_json = await data.json()
            if(dash_json!==null){
              console.log(dash_json)
              setDashboard(dash_json)
            }else{
              setDashboard(null)
            }
          }catch(error){
            setDashboard(null)
            console.error("Error API GET - Dashboard: ", error)
        }
        }
        
      }

    return (
      <Paper sx={{ maxWidth: '100%', margin: 'auto', overflow: 'hidden' }}>
        <Typography sx={{ my: 2, mx: 2,fontSize:30 }} color="text.secondary" align="center">
        DASHBOARD
        </Typography>
        <Divider variant="middle" component="" />
    <Divider sx={{ mt: 2 }} />
    <br></br>
      <div align="center" margin= 'auto'>
        
        <Grid container direction="column" justifyContent="space-between" maxWidth="70%" >
          <Grid container spacing={3} marginTop={3}>
            <Grid>
              <Typography sx={{ my: 2, mx: 2,fontSize:20 }} color="text.secondary">Semestre: {semestre}</Typography>
            </Grid>
            <Grid width={'30%'}>
              <Autocomplete
                //style={{ backgroundColor: 'rgba(160, 160, 160, 0.6)'}}
                disablePortal
                id="semestre"
                align="center"
                disableClearable
                options={props.semestres}
                onChange={(event,value) => handleAutocompleteChange(value.semestre)} // prints the selected value
                renderInput={params => (
                    <TextField {...params} label="Seleccione un semestre" variant="outlined" fullWidth  InputLabelProps={{style: {fontSize: '2rem'}}}  required  />
                )}
                
              />
            </Grid>

            {semestre!==null &&(
              
              <Grid item spacing={3} align="center" alignItems="center" justifyContent="center" marginTop={3}>
                <Grid container spacing={3} align="center" alignItems="center" justifyContent="center" elevation={20}>
                  {Array.from(Array(dashboard.length)).map((_, index) => (
                    
                    <Grid item xs={12} sm={5} md={5} lg={5} xl={5} key={index} elevation={20} marginBottom={3}>
                        <Cards titulo={dashboard[index].nombre} texto={dashboard[index].cantidad_alumnos + " alumnos"}/>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              )}
          </Grid>
        </Grid>
      </div>
      
      </Paper>
    );
}

//export default Dashboard;