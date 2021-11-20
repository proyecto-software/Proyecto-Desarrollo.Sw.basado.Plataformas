import React from 'react';

import Formulario from './components/pages/Formulario/Formulario';
import Login from './components/pages/LoginAdmin/Login'
import Inicio from './components/pages/homePage/inicio';
import HomeAdmin from './components/pages/PanelAdmin/HomeAdmin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

const endpoint_GetElectivos ="http://localhost:10000/ucn/electivos"

function App() {
  const [electivos,setElectivos] = React.useState([
    {
        "value": 0,
        "label": ""
    }])

  const getElectivos = async() => {
    // GET request using fetch with async/await
    const response = await fetch(endpoint_GetElectivos);
    const data = await response.json();
    console.log("e: ",data)
    setElectivos(data)
  }
  
  React.useEffect( () => {
    getElectivos()
  },[]);

  return (
    
    <Router>
        <Switch>
          <Route path="/"  exact>
            <Inicio/>
          </Route>
          <Route path="/Formulario">
          <Formulario electivos={electivos}/>
          </Route>
          <Route path="/Login">
          <Login/>
          </Route>
          <Route path="/HomeAdmin">
          <HomeAdmin/>
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;