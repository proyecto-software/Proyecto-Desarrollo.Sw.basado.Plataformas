import React from 'react';

import Formulario from './components/pages/Formulario/Formulario';
import Login from './components/pages/LoginAdmin/Login'
import Inicio from './components/pages/homePage/inicio';
import HomeAdmin from './components/pages/PanelAdmin/HomeAdmin';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const endpoints = {
  GetCarreras: "http://localhost:10000/ucn/carreras",
  GetElectivos: "http://localhost:10000/ucn/electivos",
  PostFormulario: "http://localhost:10000/ucn/formulario",
  ValidarRut : "http://localhost:10000/ucn/rut"
}

function App() {
  const [electivos,setElectivos] = React.useState([
    {
        "value": 0,
        "label": ""
    }])
  const [carreras,setCarreras] = React.useState([
    {
        "value": "",
        "label": ""
    }])

  const getElectivos = async(endpoint) => {
    try{
      // GET request using fetch with async/await
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log("Electivos Api: ",data)
      setElectivos(data)
    }catch(error){
      console.error("Error API GET - Electivos: ", error)
    }
  }

  const getCarreras = async(endpoint) => {
    try{
      // GET request using fetch with async/await
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log("Carreras Api: ",data)
      setCarreras(data)
    }catch(error){
      console.error("Error GET-Carreras: ", error)
    }
  }
  
  React.useEffect( () => {
    getElectivos(endpoints.GetElectivos)
    getCarreras(endpoints.GetCarreras)
  },[]);

  return (
    
    <Router>
       {/*  <Switch> */}
    
          <Route path="/"  exact>
            <Inicio/>
          </Route>
          <Route path="/Formulario">
          <Formulario endpoint={endpoints} carreras={carreras} electivos={electivos}/>
          </Route>
          <Route path="/Login">
          <Login/>
          </Route>
          <Route path="/HomeAdmin">
          <HomeAdmin/>
          </Route>
       {/*  </Switch> */}
     
    </Router>
  );
}

export default App;