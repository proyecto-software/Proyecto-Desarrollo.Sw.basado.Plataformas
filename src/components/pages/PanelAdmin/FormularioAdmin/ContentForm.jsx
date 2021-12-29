import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import {Button, Grid} from "@mui/material";
import {
  BrowserRouter as Router,
  useParams
  } from "react-router-dom";
export default function ContentForm() {
  const endpoint_estado_solicitud = 'https://backend-electives.herokuapp.com/ucn/AprobarPostulacion'
  //Params
  const {id} = useParams();
  console.log(id)
  //HOOKS
  const [Alumnos,setAlumnos] = useState([])
  //End Poinst

  //UseEffect
  React.useEffect( ()=>{
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
    obtenerDatos()
  }, [id]);
    //Variables Para GRID

    function getValue(params) {
      const value = params.getValue(params.id, 'estado1')
      console.log("cambio estado: ", value)
    }

  
    const [editRowsModel, setEditRowsModel] = React.useState({});

    const handleEditRowsModelChange = React.useCallback((model) => {
      setEditRowsModel(model);
      if(model.length === 0){

      }else{
        //console.log("model: ",model)
        //console.log("alumnos: ",Alumnos)
        //console.log("x: ",editRowsModel)
      }
      
    }, []);

    function postSavePostulacion(row){
      const rut = row.rut_alumno
      const estado1 = row.estado1
      const estado2 = row.estado2
      const estado3 = row.estado3

      //console.log(rut,estado1,estado2,estado3)
    }

    async function PostCambiarEstadoSolicitud(rut,electivo){
      try{
          const req = {
            rut_alumno: "",
            nombre_electivo: ""
          }

          req.rut_alumno = rut
          req.nombre_electivo = electivo

          console.log(req)
          const structReq = ['rut_alumno','nombre_electivo']
          const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(req,structReq)
          };
          console.log(requestOptions)
          const response = await fetch(endpoint_estado_solicitud, requestOptions);
          const status = await response.status;
          console.log("body: ",response.body)
          if (status===200){
              return true
          }else{
              return false
          }
      }catch(error){
          console.error("Error API POST - Formulario: ", error)
      }
    }
    const columns = [
      //{field:'id',headerName:'Id',width:90},
      {field:'rut_alumno',headerName:'Rut',width:90},
      {field:'carrera',headerName:'Carrera',width:70, align: 'center'},
      {field:'indicador',headerName:'Indicador',width:90, align: 'center', headerAlign: 'center'},
      {field:'electivo1',headerName:'Electivo1',width:'100', editable:true},
      {
        field: 'estado1',
        headerName: 'Estado 1',
        width: 90,
        editable: true,
        type: 'boolean',
        preProcessEditCellProps : (params) => {
          console.log("e1: ",params.props.value)
          if(params.props.value !== params.row.estado1){
            PostCambiarEstadoSolicitud(params.row.rut_alumno,params.row.electivo1)
          }
          return { ...params.props, error: false };
        },
      },
      {field:'electivo2',headerName:'Electivo2',width:90},
      {
        field: 'estado2',
        headerName: 'estado2 ',
        width: 90,
        border: `50px solid 'green'`,
        borderRadius: 2,
        display: 'table',
        editable: true,
        type: 'boolean',
        preProcessEditCellProps : (params) => {
          console.log("e2: ",params.props.value)
          if(params.props.value !== params.row.estado2){
            PostCambiarEstadoSolicitud(params.row.rut_alumno,params.row.electivo2)
          }
          return { ...params.props, error: false };
        },
      },
      {field:'electivo3',headerName:'Electivo3',width:90},
      {
        field: 'estado3',
        headerName: 'Estado3',
        width: 90,
        editable: true,
        type: 'boolean',
        preProcessEditCellProps : (params) => {
          console.log("e3: ",params.props.value,params.row.estado3)
          if(params.props.value !== params.row.estado3){
            PostCambiarEstadoSolicitud(params.row.rut_alumno,params.row.electivo3)
          }
          return { ...params.props, error: false };
        },
      },
      {
        field: 'save',
        headerName: '',
        width: 150,
        renderCell: (params) => (
          <strong>
            <Button
              variant="contained"
              color="primary"
              size="small"
              //onClick = {console.log("row: ",params.row)}
              disabled = {!(params.row.estado1 || params.row.estado2 || params.row.estado3 || true)}
              onClick = {postSavePostulacion(params.row)}
              style={{ marginLeft: 16 }}
            >
              SAVE
            </Button>
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