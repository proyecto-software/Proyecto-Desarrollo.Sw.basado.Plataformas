import React,{useState} from 'react'
import { useForm } from "react-hook-form";

import {Button,Card,CardContent,Typography,TextField,Grid,Autocomplete,Box} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import Alert from '@mui/material/Alert';


const FormularioAlumno = (props) => {
    //emdpoints
    console.log(props)
    const endpoint_formulario = props.endpoint.PostFormulario
    const endpoint_rut = props.endpoint.ValidarRut
    const endpoint_correo = props.endpoint.ValidarCorreo
    //options
    const electivos = props.electivos
    const carreras = props.carreras
    const cantidad = [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
    ];
    
    async function PostDataFormulario(endpoint,form,struct){
        try{
            console.log(endpoint)
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form,struct)
            };
            console.log(requestOptions)
            const response = await fetch(endpoint, requestOptions);
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
    async function PostValidarRut(event){
        try{
            const req = {
                "Rut": event.target.value
            }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(req)
            };
            console.log(requestOptions)
            const response = await fetch(endpoint_rut, requestOptions);
            const status = await response.status;
            console.log("body: ",response.body)
            console.log("resp: ",response)
            console.log(event)

            if (status===200){
                //event.target.style.backgroundColor = color_gris_60
                //event.target.style.borderColor = color_red
                setRutValido(true)
                return true
            }else{
                //event.target.style.backgroundColor = color_red
                //event.target.style.borderWidth = 10
                //event.target.style.borderColor = color_red
                
                setRutValido(false)
                return false
            }
        }catch(error){
            console.error("Error API POST - Validar Rut: ", error)
        }

        
    }
    async function PostValidarCorreo(event){
        try{
            const req = {
                "Correo": event.target.value
            }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(req)
            };
            console.log(requestOptions)
            const response = await fetch(endpoint_correo, requestOptions);
            const status = await response.status;
            console.log("body: ",response.body)
            console.log("resp: ",response)
            console.log(event)

            if (status===200){
                //event.target.style.backgroundColor = color_gris_60
                //event.target.style.borderColor = color_red
                setCorreoValido(true)
                return true
            }else{
                //event.target.style.backgroundColor = color_red
                //event.target.style.borderWidth = 10
                //event.target.style.borderColor = color_red
                
                setCorreoValido(false)
                return false
            }
        }catch(error){
            console.error("Error API POST - Validar Rut: ", error)
        }

        
    }
    async function onSubmit (){
        
        /*
        console.log("data")
        let requestSuccessful = false

        const response = sendDataPost()
        requestSuccessful = response
        console.log(response)
        
        if(response.successful){
            alert("Solicitud registrada con exito.")
            //window.location.reload();
        }else{
            alert("La solicitud no se ha podido registrar, la culpa es del nico.")
        }

        */
        
        const successful = await PostDataFormulario(endpoint_formulario,formulario,idFormulario)
        console.log("send data successful: ",successful)
        if(successful){
            alert("Solicitud registrada con exito.")
            //window.location.reload();
        }else{
            alert("La solicitud no se ha podido registrar.")
        }
    }

    const [rutValido, setRutValido] = useState(true);
    const [correoValido, setCorreoValido] = useState(true);
    const [sendSuccessful, setsendSuccessful] = useState(false);

    //Formulario
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
    const color_red = "#FF0000"
    
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
    
    //Enviar datos
    const {handleSubmit} =  useForm();

    
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
            borderColor: "#00FF87" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card sx={{ bgcolor: 'rgba(60, 60, 60, 0.6)', color: 'text.primary', p: 2 }}>
                    <Typography color ="white" gutterBottom variant ="h3" align="center" align="center">Formulario Alumno</Typography>
                    <CardContent>
                        <Grid container spacing ={1}>
                            <Grid xs={12} sm={6 } color= "green" item>
                            <CssTextField style={{ backgroundColor: 'rgba(160, 160, 160, 0.6)'}}label="Rut" placeholder="Ingrese Rut" name="rut" variant="outlined" fullWidth required onChange={handleInputChange} onBlur={PostValidarRut} error={!rutValido}
                            ></CssTextField>
                            {!rutValido && (
                                <div aling="center">
                                <Alert severity="error" sx={{ mb: 2 }}>
                                    El rut no es correcto!
                                </Alert>
                            </div>   
                            )}
                            </Grid>
                            <Grid xs={12} sm={6}item>
                            <CssTextField style={{ backgroundColor: 'rgba(160, 160, 160, 0.6)'}} label="Nombre" placeholder="Ingrese Nombre" name="nombre" variant="outlined" fullWidth required onChange={handleInputChange}></CssTextField>
                            </Grid>
                            <Grid xs={12}item>
                            <CssTextField style={{ backgroundColor: 'rgba(160, 160, 160, 0.6)'}} type="email" label="Correo" placeholder="Ingrese alumnos.ucn.cl" name="correo" variant="outlined" fullWidth required onChange={handleInputChange} onBlur={PostValidarCorreo} error={!correoValido} ></CssTextField>
                            {!correoValido && (
                                <div aling="center">
                                <Alert severity="error" sx={{ mb: 2 }}>
                                    El correo no es correcto!
                                </Alert>
                                </div>   
                            )}
                            </Grid>
                            
                            <Grid xs={6}  item>
                                <Autocomplete 
                                        style={{ backgroundColor: 'rgba(160, 160, 160, 0.6)'}} 
                                        disablePortal
                                        disableClearable
                                        id="carrera"
                                        options={carreras}
                                        onChange = {(event, value) => handleAutocompleteChange("carrera",value.label)} // prints the selected value
                                        renderInput={params => (
                                            <CssTextField {...params} label="Carrera" variant="outlined" fullWidth required/>
                                        )}
                                />
                            </Grid>
                            <Grid xs={6}  item>
                                <Autocomplete
                                       style={{ backgroundColor: 'rgba(160, 160, 160, 0.6)'}}
                                        disablePortal
                                        disableClearable
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
                                        disableClearable
                                        id="electivo1"
                                        options={electivos}
                                        
                                        onChange =  {(event, value) => handleAutocompleteChange("electivo1",value.label)} // prints the selected value
                                        renderInput={params => (
                                            <CssTextField {...params} label="Electivo 1" variant="outlined" fullWidth required/>
                                        )}
                            />
                            </Grid>
                            <Grid xs={12} item>
                            <Autocomplete
                                        style={{ backgroundColor: 'rgba(160, 160, 160, 0.6)'}}
                                        disablePortal
                                        disableClearable
                                        id="electivo2"
                                        options={electivos}
                                        
                                        onChange =  {(event, value) => handleAutocompleteChange("electivo2",value.label)} // prints the selected value
                                        renderInput={params => (
                                            <CssTextField {...params} label="Electivo 2" variant="outlined" fullWidth required/>
                                        )}
                                        
                            />
                            </Grid>
                            <Grid xs={12} item>
                            <Autocomplete
                                        
                                        style={{ backgroundColor: 'rgba(160, 160, 160, 0.6)'}}
                                        disabled={false}
                                        disableClearable
                                        id="electivo3"
                                        options={electivos}
                                        onChange = {(event, value) => handleAutocompleteChange("electivo3",value.label)} // prints the selected value
                                        renderInput={params => (
                                            <CssTextField {...params} label="Electivo 3" variant="outlined" fullWidth required/>
                                        )}
                            />
                            </Grid>
      
                            <Grid xs={12} item>
                                <div align="center">
                                <Button  
                                style={{ 
                                        backgroundColor: 'rgba(160, 160, 160, 0.6)',
                                        width:'30rem',
                                        height:'6rem',
                                        fontSize:15
                                        }}
                                onClick={handleSubmit}
                                disabled={!(rutValido && correoValido)}
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