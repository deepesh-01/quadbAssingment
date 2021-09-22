import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
// import axios from 'axios';

import {Card, CardHeader, CardMedia,  CardActions, Typography, Grid, Button} from '@material-ui/core';
import {Star} from '@material-ui/icons';
import {amber} from 'material-ui-colors';

import useStyles from './homeStyles';

export const Home = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const data = useState(props);
    const shows = data[0].children[1];
    // const [val,setVal] = useState(null);
    console.log("data : ", data);   
    console.log("shows : ", shows);
    
    const screen2 = (index) => {
        // await setVal(index);
        // const  state = ;
        // console.log("index is : ",state);
        history.push({pathname: "/screen2", state:shows[index]})
    }

    return (
 
        <Grid container spacing={3} className={classes.grid}>
            {shows ? shows.map((show,index) =>
            <Grid item xs={12} sm={6} md={4} paddingTop="16px">
                <Card className={classes.root}>
                    <CardHeader className={classes.header} title={show.show.name} subheader={show.show.premiered}/>
                        <div className={classes.mediaDiv}>
                        <CardMedia className={classes.media}
                            image={show.show.image?.medium || show.show.image?.original }
                            alt={show.show.name}
                            />
                        </div>
                        <Typography sx={{ mb: 1.5 }} gutterBottom>
                            {show.show.rating.average ? <span className={classes.rating}> Rating :  {show.show.rating.average}  <Star fontSize="small" style={{color:amber[700]}}/>  </span> 
                            : <span className={classes.rating} > Rating : N/A </span> }
                        </Typography>
                        <CardActions className={classes.cardaction}>
                            <Button onClick={()=>screen2(index)} variant="outlined" size="small">Show More</Button>
                        </CardActions>
                </Card>
            </Grid>
            ) : <h1>Error fetching API</h1>}
        </Grid>


    );
}