import * as React from 'react';
import Paper from '@mui/material/Paper';
import Sidebar from './Sidebar'
import ContentForm from './FormularioAdmin/ContentForm'
import PanelDashBoard from './DashBoard/PanelDashBoard'
import PanelInformeCurricular from './InformeCurricular/PanelInformeCurricular'
import Login from '../LoginAdmin/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
  
} from "react-router-dom";

export default function BodyAdmin() {
  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden'}}>
     <h1>hola</h1>
    </Paper>
  );
}
