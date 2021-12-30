import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import {Button, Grid} from "@mui/material";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import {
  BrowserRouter as Router,
  useParams
  } from "react-router-dom";
export default function ContentForm() {
  
  //Params
  const {id} = useParams();
  console.log(id)
  //HOOKS
  const [Alumnos,setAlumnos] = useState([])
  //End Poinst

  const obtenerDatos = async() => {
      try{
        const data = await fetch('https://backend-electives.herokuapp.com/ucn/solicitudes')
        const infoAlum = await data.json()
        setAlumnos(infoAlum)
        console.log("Formulario: ",infoAlum)
      }catch(error){
        console.error("Error API GET - Content Form: ", error)
    }
  }

  const PostEstadoSolicitud = async(row) => {
    try{
      const req = {
        "rut": row.rut_alumno,
        "electivo1": row.electivo1,
        "estado1": row.estado1,
        "electivo2": row.electivo2,
        "estado2": row.estado2,
        "electivo3": row.electivo3,
        "estado3": row.estado3
      }
      console.log("req: ",req)
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req)
      };

      console.log("req: ",requestOptions)
      const response = await fetch('https://backend-electives.herokuapp.com/ucn/AprobarPostulacion',requestOptions)
      const status = await response.status;
      console.log("body: ",response.body)
      console.log("resp: ",response)
    }catch(error){
        console.error("Error API POST - Content Form: ", error)
    }
  }


  //CAMBIOS EN EL MODAL
    /* MODAL  */
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    /* style modal */
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const modal = async()=>{
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description">
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </Box>
    </Modal>
  
}


  const refreshForm = async(row) => {
    await PostEstadoSolicitud(row)
    await obtenerDatos()
    handleOpen()
    await modal()
  }

  //USE EFFECT
  React.useEffect( ()=>{
    obtenerDatos()
  }, [id]);
    //Variables Para GRID
 




    const columns = [
      {field:'rut_alumno',headerName:'Rut',minWidth:90, flex:0.4,},
      {field:'carrera',headerName:'Carrera',width:70, align: 'center', flex:0.3,},
      {field:'indicador',headerName:'Indicador',width:90, align: 'center', headerAlign: 'center', flex:0.3,},
      {field:'cantidad_electivos',headerName:'Cantidad',width:90, align: 'center', headerAlign: 'center', flex:0.3, editable:true, },
      {field:'electivo1',headerName:'Electivo 1', flex:1,
        renderCell: (params) => (
          <strong> 
            <Button
              variant="contained"
              color={(params.row.estado1)?"info":"inherit"}
              size="small"
              style={{ marginLeft: 16 }}
              onClick={ () => (params.row.estado1 = !params.row.estado1)}
            >
            {params.value}
            </Button>
          </strong>
        ),
      },
      {field:'electivo2',headerName:'Electivo 2', flex:1,
        renderCell: (params) => (
          <strong>
            
            <Button
              variant="contained"
              color={(params.row.estado2)?"info":"inherit"}
              size="small"
              style={{ marginLeft: 16 }}
              onClick={ () => (params.row.estado2 = !params.row.estado2)}
            >
              {params.value}
            </Button>
          </strong>
        ),
      },
      {field:'electivo3',headerName:'Electivo 3', flex:1,
        renderCell: (params) => (
          <strong>
            
            <Button
              variant="contained"
              color={(params.row.estado3)?"info":"inherit"}
              size="small"
              style={{ marginLeft: 16 }}
              onClick={ () => (params.row.estado3 = !params.row.estado3)}
            >
              {params.value}
            </Button>
          </strong>
        ),
      },
      {
        field: 'save',
        headerName: '',
        width: 100,
        renderCell: (params) => (
          <strong>
            <div align="center">
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick = {() => refreshForm(params.row)} 
              disabled = {!([params.row.estado1, params.row.estado2, params.row.estado3].filter((v) => v).length <= params.row.cantidad_electivos)}
              //onClick = {}
              style={{ marginLeft: 16 }}
            >
              SAVE
            </Button>
            </div>
          </strong>
        ),
      },
    ];
  const handleChange = () => {
    console.log(Alumnos)
  }
  return (
    <Router>
    <Paper sx={{ maxWidth: '100%', margin: 'auto', overflow: 'hidden'}}>
    <Typography sx={{ my: 2, mx: 2,fontSize:30 }} color="text.secondary" align="center">
        FORMULARIO
    </Typography>
        <div style={{height: 400, width: '100%' }} align="center">
          <Grid container maxWidth="95%" marginTop={5} height= {'95%'} justifyContent="space-between">
            <DataGrid
              sx={{fontSize:20}}
              rows={Alumnos}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[12]}
              //checkboxSelection
              disableSelectionOnClick
              
              //onCellEditStop = {async(params, event)=> console.log("e1: ",params.row)}
            />
          </Grid>
        </div>
      </Paper>
      </Router>
    );
}