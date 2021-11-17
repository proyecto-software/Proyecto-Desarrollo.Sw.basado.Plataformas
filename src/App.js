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



function App() {
  return (
    <Router>
      <div className="">
        <Switch>
          <Route path="/Formulario"  exact>
          <Formulario/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;