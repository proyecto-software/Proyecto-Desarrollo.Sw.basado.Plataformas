import React,{useState} from 'react'
/* import Select from "react-select" */
import { useForm } from "react-hook-form";
import Axios from 'axios'
import { Fragment } from 'react'
const defaultValues = {
    select: "",
  };
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
        event.preventDefault()
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
        event.target.reset()
    }
    //UserForm
    const {control, register, handleSubmit, formState:{ errors } } =  useForm({defaultValues});
    const onSubmit = (data, e)=>{
        //console.log(data)
      
        //dataPostFormulario.rut = data.rut
        e.target.reset()
    }
    //Método Post

      
    return (
            <Fragment>
            <form onSubmit={enviarDatos}>
            <div className="form-row">
            <div class="form-group col-md-6">
            <br/>
            <input
                    type="text"
                    placeholder="Rut"
                    class="form-control"
                    name="rut"
                    {...register("rut", { 
                    required:{
                        value: true,
                        message: 'Campo requerido' 
                    }
                })}
                    onChange = {handleInputChange}
            />
            <span className="">
                {errors.rut &&  errors.rut.message}
            </span>
            </div>

            <div class="form-group col-md-6">
            <br/>
            <input
                    type="text"
                    placeholder="Nombre"
                    class="form-control"
                    name="nombre"
                    {...register("nombre", { 
                    required:{
                        value: true,
                        message: 'Campo requerido' 
                    }
                })}
                    onChange = {handleInputChange}
            />
            <span className="">
                {errors.rut &&  errors.rut.message}
            </span>
            </div>

            <br/>
            <input  
                    placeholder="Correo"
                    class="form-control"
                    type="email"
                    name="correo"
                    {...register("correo", { 
                    required:{
                        value: true,
                        message: 'Campo requerido' 
                    }
                })}
                onChange={handleInputChange}   
            />
            <span className="">
                {errors.correo &&  errors.correo.message}
            </span>
            <br/>
            <div class="form-group col-md-6">  
            <select {...register("Carrera",{ required: "Campo requerido" })} name="carrera" onChange={handleInputChange}>
                
                <option value="ICCI" >ICCI</option>
                <option value="ICI">ICI</option>
                <option value="ITI">ITI</option>
                
            </select>
            <span className="">
                {errors.Carrera &&  errors.Carrera.message}
            </span>
            </div>
            <br/>
            <div class="form-group col-md-6">  
            <select  {...register("Cantidad",{ required: "Campo requerido"})}
            onChange={handleInputChange} 
            name="cantidad">
                <option value={1} type="number">1</option>
                <option value={2} type="number">2</option>
                <option value={3} type="number">3</option>
            </select>
            <span className="">
                {errors.Cantidad &&  errors.Cantidad.message}
            </span>
            </div>
            <br/>
            <div class="form-group col-md-6">  
            <select  {...register("electivo1",{ required: "Campo requerido"})}
            onChange={handleInputChange} >
                <option value="E1" >Electivo 1</option>
                <option value="E2">Electivo 2</option>
                <option value="E3">Electivo 3</option>
            </select>
            <span className="">
                {errors.ESele1 &&  errors.ESele1.message}
            </span>
            </div>
            <br/>
            <div class="form-group col-md-6">  
            <select  {...register("electivo2",{ required: "Campo requerido"})}
            onChange={handleInputChange} >
                <option value="E1" >Electivo 1</option>
                <option value="E2">Electivo 2</option>
                <option value="E3">Electivo 3</option>
            </select>
            <span className="">
                {errors.ESele2 &&  errors.ESele2.message}
            </span>
            </div>
            <br/>
            <div class="form-group col-md-6">  
            <select  {...register("electivo3",{ required: "Campo requerido"})}
            onChange={handleInputChange} >
                <option value="E1" >Electivo 1</option>
                <option value="E2">Electivo 2</option>
                <option value="E3">Electivo 3</option>
            </select>
            <span className="">
                {errors.ESele3 &&  errors.Cantidad.message}
            </span>
            </div>            
            <br/>
        </div>
            <button type="submit" class="btn btn-primary" >Agregar</button>
        </form>
        
        </Fragment>
        
        );
}
export default FormularioAlumno