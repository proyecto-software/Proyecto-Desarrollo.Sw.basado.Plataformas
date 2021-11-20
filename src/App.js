import React from 'react';

import Formulario from './components/pages/Formulario/Formulario';
import Login from './components/pages/LoginAdmin/Login'
import Inicio from './components/pages/homePage/inicio';
import HomeAdmin from './components/pages/PanelAdmin/HomeAdmin';
import ContentForm from './components/pages/PanelAdmin/FormularioAdmin/ContentForm'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";





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
          <Route path="/HomeAdmin">
          <HomeAdmin/>
          </Route>
          <Route path="/HomeAdmin/ContentForm">
          <ContentForm/>
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;