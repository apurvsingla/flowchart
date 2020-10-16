import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    sideImages: {
        position: 'relative',
        top: '12px'
    },
  });

const ListComponent = (props) => {
    const classes = useStyles();
    return (
        <Grid
        direction="column"
        alignItems="flex-end">
            <Grid item className={classes.sideImages}>
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_button_setting_selected.png'} 
                    alt="pic" width="70" onClick={props.show}/>
            </Grid>
            <Grid item className={classes.sideImages}>
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_button_setting_selected.png'} 
                    alt="pic" width="70" onClick={props.show}/>
            </Grid>
            <Grid item className={classes.sideImages}>
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_button_setting_selected.png'} 
                    alt="pic" width="70" onClick={props.show}/>
            </Grid>
            <Grid item className={classes.sideImages}>
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_button_setting_selected.png'} 
                    alt="pic" width="70" onClick={props.show}/>
            </Grid>
        </Grid>
    );
}

export default ListComponent;
