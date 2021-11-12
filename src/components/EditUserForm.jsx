import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'

const EditUserForm = (props) => {
    //console.log(props.currentUser)

    //State
    const {register, handleSubmit, formState:{ errors },setValue } = useForm({
        //recibe los valores por defecto q va a tener nuestro formulario
        //input del name e input del username
        defaultValues:props.currentUser
    });
    //seteamos los datos
    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);
    const onSubmit = (data, e)=>{
        //console.log(data)
        //botón para editar
        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id,data)
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
            <button type="submit" className="" >Editar usuario</button>
        </form>
    </Fragment>
  
  );
}

export default EditUserForm