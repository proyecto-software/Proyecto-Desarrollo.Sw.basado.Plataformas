import React from 'react';

import Inicio from './components/Inicio'
import "./styles/mobile.css"
import User from './components/User'
import Nosotros from './components/Nosotros'
import TestsComponent from './components/pages/test/test'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Formulario from './components/pages/Formulario/Formulario';


function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/Inicio" className="btn btn-dark">Inicio</Link>
          <Link to="/Test" className="btn btn-dark">Test</Link>
          <Link to="/Formulario" className="btn btn-dark">Formulario</Link>
          <NavLink to="/Nosotros" className="btn btn-dark" activeClassName="active">Nosotros</NavLink>
        </div> 
         <hr />
        <Switch>
          <Route path="/Nosotros/:id">
          <User/>
          </Route>        
          <Route path="/Inicio" exact>
          <Inicio/>
          </Route>
          <Route path="/Formulario">
          <Formulario/>
          </Route>
          <Route path="/Nosotros/">
          <Nosotros/>
          </Route>
          <Route path="/Test/">
          <TestsComponent/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;