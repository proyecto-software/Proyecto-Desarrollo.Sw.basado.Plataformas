import React from 'react';
import {Card, Typography, CardContent, CardActions} from '@mui/material';
import Divider from '@mui/material/Divider';

/*
import {makeStyles} from '@mui/material/styles'



const useStyles= makeStyles(()=>({
    root:{
        textAlign: 'center',
        backgroundColor: 'rgba(73,155,234,1)'
    },
    texto:{
        fontSize: 18,
        color: 'white'
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    }
    }));
*/
function Cards(props) {

    //const classes=useStyles();
    return (
        <Card elevation={5}>
            <CardContent>
                <Typography fontSize={'1.5rem'} component="div" >
                {props.titulo}
                </Typography>
                <Divider variant="middle" component="" />
                <Typography fontSize={'1.5rem'} component="div" color="text.secondary">
                {props.texto}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Cards;