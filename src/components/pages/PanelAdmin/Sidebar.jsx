import * as React from 'react';
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
import {
  Link
} from "react-router-dom";
import logo2 from '../../../img/ucn400x112.png'
const categories = [
  {
    id: 'Panel',
    children: [
      {
        id: 'Dashboard',
        icon: <AssessmentIcon />,
        link:'/PanelDashBoard/'
       /*  active: true, */
      },
      { id: 'Formulario', icon: <AssignmentTurnedInIcon />, link:'/ContentForm/'},
      { id: 'Informe Curricular', icon: <AttributionIcon /> , link:'/PanelInformeCurricular/'},
      
      
    ],
  },
  {
    id: '',
    children: [
      { id: 'Salir', icon: <LogoutIcon /> , link:'../'},
    ],
  },
];

const item = {
  py: '2px',
  px: 3,
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
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
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
                          textDecoration: 'none' }}>                  
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
      </List>




    </Drawer>
  );
}
