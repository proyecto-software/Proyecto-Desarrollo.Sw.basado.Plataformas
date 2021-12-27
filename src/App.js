import React from 'react';
import Formulario from './components/pages/Formulario/Formulario';
import Session from './components/pages/LoginAdmin/Session'
import Inicio from './components/pages/homePage/inicio';
import HomeAdmin from './components/pages/PanelAdmin/HomeAdmin';
import {PrivateRoute} from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthContext';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

const endpoints = {
  GetCarreras: "https://backend-electives.herokuapp.com/ucn/carreras",
  GetElectivos: "https://backend-electives.herokuapp.com/ucn/electivos",
  PostFormulario: "https://backend-electives.herokuapp.com/ucn/formulario",
  ValidarRut : "https://backend-electives.herokuapp.com/ucn/rut",
  ValidarCorreo : "https://backend-electives.herokuapp.com/ucn/correo"
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
    <>
    <AuthProvider>
    <Router>
       {/*  <Switch> */}
    
          <Route path="/"  exact>
            <Inicio/>
          </Route>
          <Route path="/Formulario">
            <Formulario endpoint={endpoints} carreras={carreras} electivos={electivos}/>
          </Route>
          <Route path="/Session">
            <Session/>
          </Route>
          <PrivateRoute path="/HomeAdmin">
            <HomeAdmin/>
          </PrivateRoute>
       {/*  </Switch> */}
     
    </Router>
    </AuthProvider>
    </>
  );
}

export default App;