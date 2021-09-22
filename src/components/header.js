import React from 'react';

import {AppBar,Typography,Toolbar} from '@material-ui/core';

import useStyles from './headerStyles';

export const Header = () =>{
    const classes = useStyles();
    return(
        <AppBar className={classes.root} position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit" component="div">
                    QuadB
                </Typography>
            </Toolbar>
        </AppBar>
    );
}