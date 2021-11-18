import React from 'react';
import "./styles/mobile.css"
import Formulario from './components/pages/Formulario/Formulario';
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
    
      <div className="">
        <Switch>
          <Route path="/Inicio"  exact>
            <Inicio/>
          </Route>

          <Route path="/Formulario">
          <Formulario/>
          </Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;