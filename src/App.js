import React from 'react';
import Formulario from './Formulario'
import Inicio from './components/Inicio'
import Nosotros from './components/Nosotros'
import "./styles/mobile.css"
import User from './components/User'
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
      <div className="container mt-5">
      {/* NAV BAR */}
      {/*         <div className="btn-group">
          <Link to="/Inicio" className="btn btn-dark">Inicio</Link>
          <Link to="/Formulario" className="btn btn-dark">Formulario</Link>
          <NavLink to="/usuario" className="btn btn-dark" activeClassName="active">Usuarios</NavLink>
        </div> 
         <hr />
        */
        }
        <Switch>
          <Route path="/" exact>
          <Inicio></Inicio>
          </Route>
          <Route path="/Formulario">
          <Formulario></Formulario>
          </Route>
          <Route path="/Nosotros/:id">
          <User></User>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;