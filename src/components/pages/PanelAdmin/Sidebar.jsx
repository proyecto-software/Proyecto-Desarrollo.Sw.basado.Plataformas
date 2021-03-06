import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AttributionIcon from '@mui/icons-material/Attribution';
import LogoutIcon from '@mui/icons-material/Logout';
import {Button } from '@mui/material';

import {
  Link
} from "react-router-dom";
import logo2 from '../../../img/ucn400x112.png'

const categories = [
  {
    id: 'Panel',
    children: [
      {
        id: 'Dashboard', icon: <AssessmentIcon />, link:'/HomeAdmin/PanelDashBoard/' /*  active: true, */},
      { id: 'Solicitudes', icon: <AssignmentTurnedInIcon />, link:'/HomeAdmin/ContentForm/'},
      { id: 'Informe Curricular', icon: <AttributionIcon /> , link:'/HomeAdmin/PanelInformeCurricular/'},
      
      
    ],
  },
];
const categories1 = [
  {
    id: 'Home',
    children: [
      {
        id: 'Home', icon: <HomeIcon />, link:'/HomeAdmin/'},  
      
    ],
  },
];
const item = {
  py: 1,
  px: 6,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Sidebar(props) {
  const { ...other } = props;
  const salir = props.salir;
  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 85, color: '#fff' }}>
        <div className="logo2">
            <img 
                src={logo2}
                alt="logo 2"
            />
        </div>
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory,fontSize: 85, color: '#fff' }}>
        {
          categories1.map(({id,children}) => (
            <>
            {children.map(({ id: childId, icon, active,link }) => (
                <ListItem disablePadding key={childId}>
                  <ListItemButton selected={active} sx={item}>
                  <ListItemIcon>{icon}</ListItemIcon>

                    <Link to={{

                        pathname: link
                      


                      
                            }} 
                    style={{ 
                          textDecoration: 'none' }}>                  
                    <ListItemText style={{ color:'#ffff' }}>{childId}</ListItemText>
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))
              }
            </>


          ))

        }
        </ListItem>
        {
          categories.map(({ id, children }) => (
          
          <Box key={id} sx={{ bgcolor: '#2C4348' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
              {children.map(({ id: childId, icon, active,link }) => (
               
                <ListItem disablePadding key={childId}>
                  <ListItemButton selected={active} sx={item}>
                 
                  <ListItemIcon>{icon}</ListItemIcon>
                  
                    <Link to={{

                        pathname: link
                      


                      
                            }} 
                    style={{ 
                          textDecoration: 'none',
                          align:'center'
                           }}>
                                  
                    <ListItemText style={{ color:'#ffff' }}>{childId}</ListItemText>
                    
                    </Link>
                 
                  </ListItemButton>
                  
                </ListItem>
                
              ))
              }

          <Divider sx={{ mt: 2 }} />
          </Box>
          
          ))
        }
        <ListItem sx={{ ...item, ...itemCategory,fontSize: 85, color: '#fff' }}>
          <ListItemIcon sx={item}>
            <Button  style={{ 
                    color: '#ffffff',
                    fontSize:15,
                    }}
                    onClick= {salir}
                    href = "/Session"
                    
                    
            >
            <LogoutIcon sx={{ mr: 1.5 }}/>
            Salir
            </Button> 
          </ListItemIcon>
      </ListItem>


      </List>

    </Drawer>
  );
}