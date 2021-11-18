import React,{useState,Fragment} from 'react'
import Button from "@material-ui/core/Button";
import {Input,Card,CardContent,Typography,TextField,Grid,Autocomplete  } from "@mui/material";
const FormularioAlumno = () => {
    const endPoint ="http://localhost:10000/ucn/formulario"
    //State
    const [formulario, setFormulario] = useState({
      rut: '',
      nombre: '',
      correo: '',
      carrera: '',
      cantidad: 0,
      electivo1: '',
      electivo2: '',
      electivo3: '',
    })
 
    //Valores select
    const cantidad = [
        { label: '1', num: 1 },
        { label: '2', num: 2 },
        { label: '3', num: 3 }
      ];
    //Carreras que vienen desde la api
    const carrera = [
        { label: 'ICCI', sigla: 'ICCI' },
        { label: 'ICI', sigla: 'ICI' },
        { label: 'ITI', sigla: 'ITI' }
      ];
   //Electivos que vienen desde la api
   const electivos = [
    { label: 'Electivo 1', sigla: 'E1' },
    { label: 'Electivo 2', sigla: 'E2' },
    { label: 'Electivo 3', sigla: 'E3' }
  ];
  //Enviar datos
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event, value) => setSelectedOptions(value);
  
  const handleSubmit = () => console.log(selectedOptions);
  
    return (
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        >
        <Grid xs={12} sm={6} item 
        alignItems='center'
        justify='center'
            >
            <Typography color ="" gutterBottom variant ="h3" align="center" align="center">Formulario</Typography>
            <form>
                <Card sx={{ bgcolor: 'text.disabled', color: 'text.primary', p: 2 }}>
                    <CardContent>
                        <Grid container spacing ={1}>
                            <Grid xs={12} sm={6 }item>
                            <TextField label="Rut" placeholder="Ingrese Rut" name="rut" variant="outlined" fullWidth required
                            
                            ></TextField>
                            </Grid>
                            <Grid xs={12} sm={6}item>
                            <TextField label="Nombre" placeholder="Ingrese Nombre" name="nombre" variant="outlined" fullWidth required></TextField>
                            </Grid>
                            <Grid xs={12}item>
                            <TextField type="email" label="Correo" placeholder="Ingrese alumnos.ucn.cl" name="correo" variant="outlined" fullWidth required></TextField>
                            </Grid>
                            <Grid xs={6}  item>
                                <Autocomplete   
                                        disablePortal
                                        id="carrera"
                                        options={carrera}
                                        onChange={(event, value) => console.log(value)} // prints the selected value
                                        renderInput={params => (
                                            <TextField {...params} label="Carrera" variant="outlined" fullWidth />
                                        )}
                                        required
                                />
                            </Grid>
                            <Grid xs={6}  item>
                                <Autocomplete
                                       
                                        disablePortal
                                        id="cantidad"
                                        options={cantidad}
                                        onChange={(event, value) => console.log(value)} // prints the selected value
                                        renderInput={params => (
                                            <TextField {...params} label="Cantidad" variant="outlined" fullWidth />
                                        )}
                                        required
                                />
                            </Grid>
                            <Grid xs={12}  item>
                            <Autocomplete
                                        disablePortal
                                        id="electivo1"
                                        options={electivos}
                                        
                                        onChange={(event, value) => console.log(value)} // prints the selected value
                                        renderInput={params => (
                                            <TextField {...params} label="Electivo 1" variant="outlined" fullWidth />
                                        )}
                                        required
                            />
                            </Grid>
                            <Grid xs={12} item>
                            <Autocomplete
                                        disablePortal
                                        id="electivo2"
                                        options={electivos}
                                        
                                        onChange={(event, value) => console.log(value)} // prints the selected value
                                        renderInput={params => (
                                            <TextField {...params} label="Electivo 2" variant="outlined" fullWidth />
                                        )}
                                        required
                            />
                            </Grid>
                            <Grid xs={12} item>
                            <Autocomplete
                                        disablePortal
                                        id="electivo3"
                                        options={electivos}
                                    
                                        onChange={(event, value) => console.log(value)} // prints the selected value
                                        renderInput={params => (
                                            <TextField {...params} label="Electivo 3" variant="outlined" fullWidth />
                                        )}
                                        required
                            />
                            </Grid>
                            <Grid xs={12} item>
                            <Button  color="primary" onClick={handleSubmit} type="submit" variant="contained">Enviar</Button>
                            
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