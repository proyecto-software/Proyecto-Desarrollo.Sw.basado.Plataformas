import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {
    //State
    const {register, handleSubmit, formState:{ errors } } = useForm();
    const onSubmit = (data, e)=>{
        //console.log(data)
        props.addUser(data)
        e.target.reset()
    }
    return( 

        <Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nombre</label>
            <input
                    placeholder="Ingrese nombre de usuario"
                    className=""
                    name="usuario"
                    {...register("name", { 
                    required:{
                        value: true,
                        message: 'Campo requerido' 
                    }
                })}   
            />
            <span className="">
                {errors.name &&  errors.name.message}
            </span>
            <label>NickName</label>
            <input
                    placeholder="Ingrese NickName"
                    className=""
                    name="username"
                    {...register("username", { 
                    required:{
                        value: true,
                        message: 'Campo requerido' 
                    }
                })}   
            />
            <span className="">
                {errors.username &&  errors.username.message}
            </span>
            <br/>
            <button type="submit" className="" >Agregar</button>
        </form>
    </Fragment>
  
  );
}

export default AddUserForm