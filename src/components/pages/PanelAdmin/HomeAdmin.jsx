import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Sidebar from './Sidebar';
import Login from '../LoginAdmin/Login'
import ContentForm from './FormularioAdmin/ContentForm'
import PanelDashBoard from './DashBoard/PanelDashBoard'
import PanelInformeCurricular from './InformeCurricular/PanelInformeCurricular'
import Header from './Header';
import Paper from '@mui/material/Paper';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import BodyAdmin from './BodyAdmin';
/* Tema general del home */
let theme = createTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#027077',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 36,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#2C4348',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        contained: {
          boxShadow: 'none',
          '&:active': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          marginLeft: theme.spacing(1),
        },
        indicator: {
          height: 3,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          backgroundColor: theme.palette.common.white,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          margin: '0 16px',
          minWidth: 0,
          padding: 0,
          [theme.breakpoints.up('md')]: {
            padding: 0,
            minWidth: 0,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1),
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 4,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(255,255,255,0.15)',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#4fc3f7',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 14,
          fontWeight: theme.typography.fontWeightMedium,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          minWidth: 'auto',
          marginRight: theme.spacing(2),
          '& svg': {
            fontSize: 20,
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 32,
          height: 32,
        },
      },
    },
  },
};
/* Tamanio del width */
const tamanoWidth = 256;

export default function HomeAdmin() {
  /* Responsive design del pantalla celular */
  const [ResponsiveMobile, setResponsiveMobile] = React.useState(false);
  /* Es el cambio  de sm a sx con breakpoints*/
  const SmCambiar = useMediaQuery(theme.breakpoints.up('sm'));
  /* Setear el responsive degin */
  const manejorResponsive = () => {
    setResponsiveMobile(!ResponsiveMobile);
  };

  return (
    /* Aplica el método propio */
    <ThemeProvider theme={theme}>
     <Router>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        {/* ---------SideBar---------- */}
        <Box
          component="nav"
          sx={{ width: { sm: tamanoWidth }, flexShrink: { sm: 0 } }}
        >
         {/* ---------SideBar---------- */}
          {SmCambiar ? null : (
            <Sidebar
              PaperProps={{ style: { width: tamanoWidth } }}
              variant="temporary"
              open={ResponsiveMobile}
              onClose={manejorResponsive}
            />
          )}
         {/* ---------SideBar----------  cambiar vista*/}
          <Sidebar
            PaperProps={{ style: { width: tamanoWidth } }}
            sx={{ display: { sm: 'block', xs: 'none' } }}
          />
        </Box>
        {/* ---------SideBar----------  cambiar vista*/}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header onDrawerToggle={manejorResponsive} />
          <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
          <Paper sx={{ maxWidth: '100%', margin: 'auto', overflow: 'hidden'}}>
         
            <div >
              <div >
                  <Link to="/" className=""></Link>
                  <Link to="/HomeAdmin/Login" className=""></Link>
                  <Link to="/HomeAdmin/PanelDashBoard/" className=""></Link>
                  <Link to="/HomeAdmin/PanelInformeCurricular/" className=""></Link>
                  <Link to="/HomeAdmin/PanelInformeCurricular/" className=""></Link>
              </div > 
                <Switch>
                  <Route path="/HomeAdmin/ContentForm" >
                    <ContentForm/>
                  </Route>
                  <Route path="/HomeAdmin/PanelDashBoard" >
                    <PanelDashBoard/>
                  </Route>
                  <Route path="/HomeAdmin/PanelInformeCurricular" >
                    <PanelInformeCurricular/>
                  </Route>
                  <Route path="/" exact> 
                    <Login/>
                  </Route>
                </Switch>
            </div> 
         
          </Paper>
          </Box>
   
        </Box>
      </Box>
    </Router>
    </ThemeProvider>
    
    
  );
}