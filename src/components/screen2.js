import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import Parse from 'react-html-parser';

import broken from './broken-image.jpg';

import {Container, Grid,Typography} from '@material-ui/core';
import {Star} from '@material-ui/icons';
import {amber} from 'material-ui-colors';

import useStyles from './screen2Styles';

export const Screen2 = () => {
    const classes = useStyles();
    const history = useHistory();

    const show = history.location.state;

    console.log(show.show);

    useEffect(()=>{
        if(!show) history.push("/") 
    },[])

    return(
        <Container maxWidth="lg">
        <Grid spacing={3} className={classes.grid} container>
            <Grid item sm={4} xs={12}>
                <div className={classes.mediaDiv}>
                <img className = {classes.image}src={show.show.image?.medium || broken}>
                </img>
                </div>
            </Grid>
            <Grid item sm={8} xs={12}> 
                <Typography variant="h5">
                    {show.show.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} gutterBottom>
                            {show.show.rating.average ? <span className={classes.rating}> Rating :  {show.show.rating.average}  <Star fontSize="small" style={{color:amber[700]}}/>  </span> 
                            : <span className={classes.rating} > Rating : N/A </span> }
                </Typography>
                <Typography sx={{ mb: 1.5 }} gutterBottom>
                            Language : {show.show.language}
                </Typography>
                <Typography sx={{ mb: 1.5 }} gutterBottom>
                            Gener : {show.show.genres.join(', ')}
                </Typography>
                <Typography sx={{ mb: 1.5 }} gutterBottom>
                            Average Runtime : {show.show.runtime} Mins.
                </Typography>
                <Typography sx={{ mb: 1.5 }} gutterBottom>
                            Days : {show.show.schedule.days.join(', ')} 
                </Typography>
                <Typography sx={{ mb: 1.5 }} gutterBottom>
                    Time : {show.show.schedule.time}  
                </Typography>
                <a href={show.show.officialSite}>
                <Typography sx={{ mb: 1.5 }} gutterBottom>
                    Official Site                            
                </Typography>
                </a>
                <a href={show.show._links.previousepisode}>
                <Typography sx={{ mb: 1.5 }} gutterBottom>
                    Previous Episodes                            
                </Typography>
                </a>
            </Grid>
            <Grid item xs={12}> 
                {Parse(show.show.summary)}
            </Grid>
        </Grid>
        </Container>
    );
}