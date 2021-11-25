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





function App() {
  return (
    
    <Router>
       {/*  <Switch> */}
    
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
       {/*  </Switch> */}
     
    </Router>
  );
}

export default App;