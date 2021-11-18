import React,{useState} from 'react'
/* import Select from "react-select" */
import { useForm } from "react-hook-form";
import Axios from 'axios'
import { Fragment } from 'react'

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

  const handleInputChange = (event) => {
      setFormulario({
            ...formulario, 
            [event.target.name] : event.target.value
        }) 
        console.log(formulario)
    }
    //método de enviar 
    const enviarDatos = (event) => {
        const numero = parseInt(formulario.cantidad)
        formulario.cantidad = numero
        //console.log('enviando datos...' + formulario.rut)
        const sendJson = JSON.stringify(formulario,['rut','nombre','correo','carrera','cantidad','electivo1','electivo2','electivo3'])
        console.log(sendJson)
        //Método Post
        Axios.post(endPoint,sendJson)
        .then(res =>{
            console.log(res.data)
        })
    }
    //UserForm
    const {register, handleSubmit, formState: { errors } } =  useForm();
    
    const onSubmit = (data, e)=>{
        console.log(data)
        enviarDatos()
        e.target.reset()
    }
    //Método Post
    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="was-validated" novalidate>
                <div className="form-group col-md-12">
                    <br/>
                    <input
                        type="text"
                        placeholder="Rut"
                        className="form-control"
                        {...register("rut", { 
                            required:{
                                value: true,
                                message: 'Rut es requerido' 
                            }
                        })}
                        onChange = {handleInputChange}
                    />
                    <span className="text-danger text-small d-block mb-2">
                        {errors.rut &&  errors.rut.message}
                    </span>
                </div>

                <div className="form-group col-md-12">
                    <br/>
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="form-control"
                        {...register("nombre", { 
                            required:{
                                value: true,
                                message: 'Nombre es requerido' 
                            }
                        })}
                        onChange = {handleInputChange}
                    />
                    <span className="text-danger text-small d-block mb-2">
                        {errors.nombre &&  errors.nombre.message}
                    </span>
                </div>

                    <br/>
                    <input  
                        placeholder="Correo"
                        className="form-control"
                        type="email"
                        {...register("correo", { 
                            required:{
                                value: true,
                                message: 'Correo es requerido' 
                            }
                        })}
                        onChange = {handleInputChange}  
                    />
                    <span className="text-danger text-small d-block mb-2">
                        {errors.correo &&  errors.correo.message}
                    </span>
                
                    <div className="form-group col-md-12">  
                    <br/>
                    <select {...register("carrera",{ required: "Campo requerido" })} onChange={handleInputChange} className="form-select"> 
                        <option value="" selected disabled hidden>Seleccione una carrera</option>
                        <option value="ICCI" >ICCI</option>
                        <option value="ICI">ICI</option>
                        <option value="ITI">ITI</option>
                        
                    </select>
                    <span className="text-danger text-small d-block mb-2">
                        {errors.carrera &&  errors.carrera.message}
                    </span>
                </div>
                    <br/>
                    <div className="form-group col-md-12">  
                    <select  {...register("cantidad",{ required:'Seleccione la cantidad de electivos'})} onChange={handleInputChange} className="form-select" aria-label="select example">
                        <option value="" selected disabled hidden>Seleccione una cantridad</option>
                        <option value={1} type="number">1</option>
                        <option value={2} type="number">2</option>
                        <option value={3} type="number">3</option>
                    </select>
                    <span className="text-danger text-small d-block mb-2">
                        {errors.cantidad &&  errors.cantidad.message}
                    </span>
                    <div class="mb-3">
    <select class="form-select" required aria-label="select example">
      <option value="">Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div class="invalid-feedback">Example invalid select feedback</div>
  </div>
                    </div>
                    
                    <div className="form-group col-md-12">   
                    <br/>
                    <select  {...register("electivo1",{ required:'Seleccione un electivo'})} onChange={handleInputChange} className="form-select">
                        <option value="" selected disabled hidden>Seleccione un electivo</option>
                        <option value="E1" >Electivo 1</option>
                        <option value="E2">Electivo 2</option>
                        <option value="E3">Electivo 3</option>
                    </select>
                    <span className="text-danger text-small d-block mb-2">
                        {errors.electivo1 &&  errors.electivo1.message}
                    </span>
                </div>
                <br/>
                <div className="form-group col-md-12">  
                    <select  {...register("electivo2",{ required:'Seleccione un electivo'})} onChange={handleInputChange} className="form-select">
                        <option value="" selected disabled hidden>Seleccione un electivo</option>
                        <option value="E1" >Electivo 1</option>
                        <option value="E2">Electivo 2</option>
                        <option value="E3">Electivo 3</option>
                    </select>
                    <span className="text-danger text-small d-block mb-2">
                        {errors.electivo2 &&  errors.electivo2.message}
                    </span>
                </div>
                <div class="col-md-3 position-relative">
                    <label for="validationTooltip04" class="form-label">State</label>
                    <select class="form-select" id="validationTooltip04" required>
                    <option selected disabled value="">Choose...</option>
                    <option>...</option>
                    </select>
                    <div class="invalid-tooltip">
                    Please select a valid state.
                    </div>
                </div>
                <br/>
                <div className="form-group col-md-12">    
                    <select  
                        {...register("electivo3",{ required:'Seleccione un electivo'})} onChange={handleInputChange} className="form-select"
                        >
                        <option value="" selected disabled hidden>Seleccione un electivo</option>
                        <option value="E1" >Electivo 1</option>
                        <option value="E2">Electivo 2</option>
                        <option value="E3">Electivo 3</option>
                    </select>
                    <span className="text-danger text-small d-block mb-2">
                        {errors.electivo3 &&  errors.electivo3.message}
                    </span>
                </div>            
            <br/>
            </div>
            <button type="submit" className="btn btn-primary" >Agregar</button>
        </form>
        
        </Fragment>
        
        );
}
export default FormularioAlumno