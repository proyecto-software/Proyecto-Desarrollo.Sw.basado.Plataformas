import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import Axios from 'axios'
import {Button,Card,CardContent,Typography,TextField,Grid,Autocomplete,Box} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";


const FormularioAlumno = () => {
    const endpoint_PostFormulario ="http://localhost:10000/ucn/formulario"

    function sendDataPost () {
        
        let successful = false
        alert('enviando datos...' + formulario.rut)
        const sendJson = JSON.stringify(formulario,idFormulario)
        
        console.log(sendJson)

        Axios.post(endpoint_PostFormulario,sendJson)
        .then(res =>{
            console.log(res.status)
            if(res.status === 200){
                successful = true

            }else{
                successful = false

            }
        })
        return {successful}
    }

    const getElectivos = () => {
        
    }

    //State
    const idFormulario = ['rut','nombre','correo','carrera','cantidad','electivo1','electivo2','electivo3']
    const [formulario] = useState({
      rut: '',
      nombre: '',
      correo: '',
      carrera: '',
      cantidad: 0,
      electivo1: '',
      electivo2: '',
      electivo3: '',
    })
    
    const color_gris_60 = "rgba(60, 60, 60, 0.1)"
    const color_green_border = "#00FF87"
    const color_white = "white"
    
    const CssTextField = styled(TextField)({
        "& label.Mui-focused": {
          color: "white",
          fontSize: 12
        },
        "& .MuiInputBase-input": {
            backgroundColor: color_gris_60,
            color: "white",
            fontSize: 12
        },
        "& .MuiInput-underline:after": {
          //borderBottomColor: "white"
        },
        "& .MuiOutlinedInput-root": {
            color: "white",
            backgroundColor: color_gris_60,
            "& fieldset": {
                //borderColor: "white",
                color: "white",
            },
            "&:hover fieldset": {
                borderColor: color_white,
                color: "white"
            },
            "&.Mui-focused fieldset": {
                borderColor: color_green_border,
            },
            "& input:invalid": {
                borderColor: "red",
                borderWidth: 2
            }
        
        }
      });

    //GET DESDE LA API
    //Valores select
    const cantidad = [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 }
    ];
    //Carreras que vienen desde la api
    const carrera = [
        { label: 'ICCI', value: 'ICCI' },
        { label: 'ICI', value: 'ICI' },
        { label: 'ITI', value: 'ITI' }
    ];
    //Electivos que vienen desde la api
    const electivos = [
        { label: 'REDES DE COMPUTADORES', value: 'RC' },
        { label: 'SISTEMAS DE RECOMENDACION', value: 'SR' },
        { label: 'DATA SCIENCE', value: 'DS' }
    ];
    /////////////////////////////////////////

    //Enviar datos
    const {handleSubmit} =  useForm();

    const onSubmit = ()=>{
        console.log("data")
        let requestSuccessful = false

        const response = sendDataPost()
        requestSuccessful = response
        
        if(requestSuccessful){
            alert("Solicitud registrada con exito.")
            window.location.reload();
        }else{
            alert("La solicitud no se ha podido registrar, la culpa es del nico.")
        }

        
    }
    //const [selectedOptions, setSelectedOptions] = useState([]);

    //const handleChange = (event, value) => setSelectedOptions(value);
    
    const handleInputChange = (event) => {
        formulario[event.target.name] = event.target.value
        console.log(formulario)
    }

    const handleAutocompleteChange = (id,value) => {
        formulario[id] = value
        console.log(formulario)
        
    }

    return (
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
        
        >
        <Grid xs={12} sm={6} item 
        alignItems='center'
        justify='center'
        style={{
            boxShadow:`${alpha("#00FF87  ", 1)} 0 0 0 2px`,
            borderColor: "#00FF87" }}
            >
           
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card sx={{ bgcolor: 'rgba(60, 60, 60, 0.6)', color: 'text.primary', p: 2 }}>
                    <Typography color ="white" gutterBottom variant ="h3" align="center" align="center">Formulario Alumno</Typography>
                    <CardContent>
                        <Grid container spacing ={1}>
                            <Grid xs={12} sm={6 } color= "green" item>
                            <CssTextField style={{ backgroundColor: 'rgba(160, 160, 160, 0.6)'}}label="Rut" placeholder="Ingrese Rut" name="rut" variant="outlined" fullWidth required onChange={handleInputChange}
                            ></CssTextField>
                            </Grid>
                            <Grid xs={12} sm={6}item>
                            <CssTextField style={{ backgroundColor: 'rgba(160, 160, 160, 0.6)'}} label="Nombre" placeholder="Ingrese Nombre" name="nombre" variant="outlined" fullWidth required onChange={handleInputChange}></CssTextField>
                            </Grid>
                            <Grid xs={12}item>
                            <CssTextField style={{ backgroundColor: 'rgba(160, 160, 160, 0.6)'}} type="email" label="Correo" placeholder="Ingrese alumnos.ucn.cl" name="correo" variant="outlined" fullWidth required onChange={handleInputChange}></CssTextField>
                            </Grid>
                            <Grid xs={6}  item>
                                <Autocomplete 
                                        style={{ backgroundColor: 'rgba(160, 160, 160, 0.6)'}} 
                                        disablePortal
                                        id="carrera"
                                        options={carrera}
                                        onChange = {(event, value) => handleAutocompleteChange("carrera",value.value)} // prints the selected value
                                        renderInput={params => (
                                            <CssTextField {...params} label="Carrera" variant="outlined" fullWidth required/>
                                        )}
                                />
                            </Grid>
                            <Grid xs={6}  item>
                                <Autocomplete
                                       style={{ backgroundColor: 'rgba(160, 160, 160, 0.6)'}}
                                        disablePortal
                                        id="cantidad"
                                        options={cantidad}
                                        onChange =  {(event, value) => handleAutocompleteChange("cantidad",value.value)} // prints the selected value
                                        renderInput={params => (
                                            <CssTextField {...params} label="Cantidad" variant="outlined" fullWidth required/>
                                        )}
                                />
                            </Grid>
                            <Grid xs={12}  item>
                            <Autocomplete
                            style={{ backgroundColor: 'rgba(160, 160, 160, 0.6)', color:'white',borderColor:' rgba(20, 221, 175, 0.91)'}}
                                        disablePortal
                                        id="electivo1"
                                        options={electivos}
                                        
                                        onChange =  {(event, value) => handleAutocompleteChange("electivo1",value.value)} // prints the selected value
                                        renderInput={params => (
                                            <CssTextField {...params} label="Electivo 1" variant="outlined" fullWidth required/>
                                        )}
                            />
                            </Grid>
                            <Grid xs={12} item>
                            <Autocomplete
                                        style={{ backgroundColor: 'rgba(160, 160, 160, 0.6)'}}
                                        disablePortal
                                        id="electivo2"
                                        options={electivos}
                                        
                                        onChange =  {(event, value) => handleAutocompleteChange("electivo2",value.value)} // prints the selected value
                                        renderInput={params => (
                                            <CssTextField {...params} label="Electivo 2" variant="outlined" fullWidth required/>
                                        )}
                                        
                            />
                            </Grid>
                            <Grid xs={12} item>
                            <Autocomplete
                                        style={{ backgroundColor: 'rgba(160, 160, 160, 0.6)'}}
                                        disablePortal
                                        id="electivo3"
                                        options={electivos}
                                        onChange = {(event, value) => handleAutocompleteChange("electivo3",value.value)} // prints the selected value
                                        renderInput={params => (
                                            <CssTextField {...params} label="Electivo 3" variant="outlined" fullWidth required/>
                                        )}
                            />
                            </Grid>
                            <Grid xs={6} item>
                                <div align="center">
                                <Button  
                                style={{ 
                                        backgroundColor: 'rgba(160, 160, 160, 0.6)',
                                        width:'30rem',
                                        height:'6rem',
                                        fontSize:15
                                        }}
                               
                                type="submit" variant="contained" 
                                href="/"
                                >Volver</Button>
                                </div>
                            
                            </Grid>
                            <Grid xs={6} item>
                                <div align="center">
                                <Button  
                                style={{ 
                                        backgroundColor: 'rgba(160, 160, 160, 0.6)',
                                        width:'30rem',
                                        height:'6rem',
                                        fontSize:15
                                        }}
                                onClick={handleSubmit}
                                type="submit" variant="contained" >Enviar</Button>
                                </div>
                            
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </form>
        </Grid>
        </Box>
    )
}
export default FormularioAlumno