import React, { Fragment } from 'react';
import {useForm} from 'react-hook-form'
/* El trabajar con react-form-hook nos va a permitir validar los datos en los inputs de una forma fácil */
const FormHook = () => {
    const {register, handleSubmit, formState:{ errors } } = useForm();
    const onSubmit = (data, e)=>{
        console.log(data)
        e.target.reset()
    }

    return(
    
       <Fragment>
            <h2>Hooks Forms</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input
                    placeholder="Ingrese nombre de usuario"
                    className="form-control mb-2"
                    name="usuario"
                    {...register("name", { 
                    required:{
                        value: true,
                        message: 'Título requerido' 
                    }
                })}   
            />
            <span className="text-danger text-small d-block mb-2">
                {errors.name &&  errors.name.message}
            </span>
            
            <button className="btn btn-primary" >Enviar</button>
            </form>
        </Fragment>
      
    );
}
export default FormHook;