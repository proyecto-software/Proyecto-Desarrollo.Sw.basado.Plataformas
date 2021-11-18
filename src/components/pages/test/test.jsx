import React,{useState} from 'react'
/* import Select from "react-select" */
import { useForm } from "react-hook-form";
import Axios from 'axios'
import { Fragment } from 'react'
const defaultValues = {
    select: "",
  };

  
const TestComponent = () => {
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
    /*
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
    */
    //UserForm
    const {register, handleSubmit, formState: { errors } } =  useForm({defaultValues});
    
    const onSubmit = (data, event)=>{
        console.log(data)
      
        //dataPostFormulario.rut = data.rut
        event.target.reset()
    }
    //Método Post

      
    return (
            <Fragment>
            <form class="was-validated">
  <div class="mb-3">
    <label for="validationTextarea" class="form-label">Textarea</label>
    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
    <div class="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>

  <div class="form-check mb-3">
    <input type="checkbox" class="form-check-input" id="validationFormCheck1" required/>
    <label class="form-check-label" for="validationFormCheck1">Check this checkbox</label>
    <div class="invalid-feedback">Example invalid feedback text</div>
  </div>

  <div class="form-check">
    <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required/>
    <label class="form-check-label" for="validationFormCheck2">Toggle this radio</label>
  </div>
  <div class="form-check mb-3">
    <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required/>
    <label class="form-check-label" for="validationFormCheck3">Or toggle this other radio</label>
    <div class="invalid-feedback">More example invalid feedback text</div>
  </div>

  <div class="mb-3">
    <select class="form-select" required aria-label="select example">
      <option value="">Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div class="invalid-feedback">Example invalid select feedback</div>
  </div>

  <div class="mb-3">
    <input type="file" class="form-control" aria-label="file example" required/>
    <div class="invalid-feedback">Example invalid form file feedback</div>
  </div>

  <div class="mb-3">
    <button class="btn btn-primary" type="submit" disabled>Submit form</button>
  </div>
</form>
        </Fragment>
        
        );
}
export default TestComponent