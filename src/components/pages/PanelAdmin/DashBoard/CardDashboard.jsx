import React from 'react';
import {Card, Typography, CardContent} from '@mui/material';
import Divider from '@mui/material/Divider';

function Cards(props) {
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