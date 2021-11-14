import React from 'react';
import Formulario from './Formulario'
import Inicio from './components/Inicio'
import "./styles/mobile.css"
import User from './components/User'
import Nosotros from './components/Nosotros'
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
        <div className="btn-group">
          <Link to="/Inicio" className="btn btn-dark">Inicio</Link>
          <Link to="/Formulario" className="btn btn-dark">Formulario</Link>
          <NavLink to="/Nosotros" className="btn btn-dark" activeClassName="active">Nosotros</NavLink>
        </div> 
         <hr />
        <Switch>
          <Route path="/Nosotros/:id">
          <User/>
          </Route>        
          <Route path="/" exact>
          <Inicio/>
          </Route>
          <Route path="/Formulario">
          <Formulario/>
          </Route>
          <Route path="/Nosotros/">
          <Nosotros/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;