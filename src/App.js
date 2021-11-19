import React from 'react';

import Formulario from './components/pages/Formulario/Formulario';
import Login from './components/pages/LoginAdmin/Login'
import Inicio from './components/pages/homePage/inicio';
import Paperbase from './components/pages/PanelAdmin/PaperBase';
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
          <Route path="/Paperbase">
          <Paperbase/>
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;