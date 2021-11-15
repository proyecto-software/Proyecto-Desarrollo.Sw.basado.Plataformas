import React,{useState} from 'react'
/* import Select from "react-select" */
import { useForm } from "react-hook-form";

import Axios from 'axios'
import { Fragment } from 'react'



const defaultValues = {
    select: "",
  };
const FormularioAlumno = () => {
  const endPoint ="https:://localhost:3045"
  //State
  const [formulario, setFormulario] = useState({
    rut: '',
    nombre: '',
    correo: '',
    carrera: '',
    cantidad: '',
    electivo1: '',
    electivo2: '',
    electivo3: '',
  })
  const handleInputChange = (event) => {
/*         const newFormulario = {...formulario}
        newFormulario[event.target.id] = event.target.value
        setFormulario(newFormulario) */
        
      setFormulario({
            ...formulario, 
            [event.target.name] : event.target.value
        }) 
        console.log(formulario)
    }
    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + formulario.rut)
        //Método Post
        Axios.post(endPoint,{
            rut: formulario.rut,
            nombre: formulario.nombre,
            correo: formulario.correo,
            carrera: formulario.carrera,
            cantidad: formulario.cantidad,
            electivo1: formulario.electivo1,
            electivo2: formulario.electivo2,
            electivo3: formulario.electivo3
        })
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
            <select {...register("Carrera",{ required: "Campo requerido" })} name="carrera" placeholder="select" value="sebita"
            onChange={handleInputChange}
            
            >
                
                <option value="carrera-icci" >ICCI</option>
                <option value="carrera-ici">ICI</option>
                <option value="carrera-iti">ITI</option>
                
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
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <span className="">
                {errors.Cantidad &&  errors.Cantidad.message}
            </span>
            </div>
            <br/>
            <div class="form-group col-md-6">  
            <select  {...register("electivo1",{ required: "Campo requerido"})}
            onChange={handleInputChange} >
                <option value="Electivo-1" >Electivo 1</option>
                <option value="Electivo-2">Electivo 2</option>
                <option value="Electivo-3">Electivo 3</option>
            </select>
            <span className="">
                {errors.ESele1 &&  errors.ESele1.message}
            </span>
            </div>
            <br/>
            <div class="form-group col-md-6">  
            <select  {...register("electivo2",{ required: "Campo requerido"})}
            onChange={handleInputChange} >
                <option value="Electivo-1" >Electivo 1</option>
                <option value="Electivo-2">Electivo 2</option>
                <option value="Electivo-3">Electivo 3</option>
            </select>
            <span className="">
                {errors.ESele2 &&  errors.ESele2.message}
            </span>
            </div>
            <br/>
            <div class="form-group col-md-6">  
            <select  {...register("electivo3",{ required: "Campo requerido"})}
            onChange={handleInputChange} >
                <option value="Electivo-1" >Electivo 1</option>
                <option value="Electivo-2">Electivo 2</option>
                <option value="Electivo-3">Electivo 3</option>
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