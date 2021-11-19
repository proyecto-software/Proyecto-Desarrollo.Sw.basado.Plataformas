import React from 'react';
import "./styles/mobile.css"
import Formulario from './components/pages/Formulario/Formulario';
import Login from './components/pages/LoginAdmin/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Inicio from './components/pages/homePage/inicio';



function App() {
  return (
    
    <Router>
    
      
        <Switch>
          <Route path="/"  exact>
            <Inicio/>
          </Route>
          <Route path="/Formulario">
          <Formulario/>
          </Route>
          <Route path="/Login">
          <Login/>
          </Route>

        </Switch>
      
    </Router>
  );
}

export default App;