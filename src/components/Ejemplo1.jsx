import React, { Fragment, useState } from 'react';
import {useForm} from 'react-hook-form';

const Ejemplo1= ()=>{
    const {register, handleSubmit, formState:{ errors } } = useForm();

    const [Entradas, setEntradas] = useState([])

    const onSubmit = (data, e)=>{
        console.log(data)
        
        setEntradas([
            ...Entradas,
            data
        ])
        e.target.reset()
    }
   
    return(
    <Fragment>
        <h2>EJEMPLO 1 </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input
                placeholder="Ingrese titulo"
                className="form-control mb-2"
                name="titulo"
                {...register("titulo", { 
                required:{
                    value: true,
                    message: 'Título requerido' 
                },
                minLength:{value:2,message:'Mínimo 2 letras'}
            })}   
        />
        <span className="text-danger text-small d-block mb-2">
            {errors.titulo &&  errors.titulo.message}
        </span>
        <input
                placeholder="Ingrese Descripcion"
                className="form-control mb-2"
                name="descripcion"
                {...register("descripcion", { 
                required:{
                    value: true,
                    message: 'Título requerido' 
                }
            })}   
        />
        <span className="text-danger text-small d-block mb-2">
            {errors.descripcion &&  errors.descripcion.message}
        </span>
        <button className="btn btn-primary" >Enviar</button>
        </form>
        <ul>
        {
            Entradas.map(item => 
                <li>{item.titulo} - {item.descripcion}</li>
            )
        }
        </ul>
    </Fragment>
    );

}
export default Ejemplo1