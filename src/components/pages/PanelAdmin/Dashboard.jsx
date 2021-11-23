import * as React from 'react';
import Paper from '@mui/material/Paper';

import ContentForm from './FormularioAdmin/ContentForm'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  
} from "react-router-dom";
export default function Dashboard() {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden'}}>
     <h1>hola</h1>
   
     <Router>
     <div >
      <div >
          
          <Link to="/ContentForm/" className="btn btn-dark">Formulario</Link>
         
      </div> 
        <Switch>
          <Route path="/ContentForm" >
            <ContentForm/>
          </Route>
        </Switch>
      </div> 
    </Router>

    </Paper>
  );
}
