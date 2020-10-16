import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    sideImages: {
        position: 'relative',
        top: '12px'
    },
    abs: {
        position: 'absolute',
        top: '6.5rem',
        right: '17%',
        textAlign: 'right'
    },
    mar: {
        marginBottom: '35px',
        color: '#311b92',
        fontWeight: 'bold',
        letterSpacing: '0.05rem',
        fontSize: '1.2re'
    }
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
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_button_remote.png'} 
                    alt="pic" width="70" onClick={props.show}/>
            </Grid>
            <Grid item className={classes.sideImages}>
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_button_music.png'} 
                    alt="pic" width="70" onClick={props.show}/>
            </Grid>
            <Grid item className={classes.sideImages}>
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_button_image.png'} 
                    alt="pic" width="70" onClick={props.show}/>
            </Grid>
            <Grid item className={classes.sideImages}>
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_button_plotter.png'} 
                    alt="pic" width="70" onClick={props.show}/>
            </Grid>
            <Grid item className={classes.sideImages}>
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_button_speech.png'} 
                    alt="pic" width="70" onClick={props.show}/>
            </Grid>
            <Grid item className={classes.sideImages}>
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_button_update.png'} 
                    alt="pic" width="70" onClick={props.show}/>
            </Grid>
            <div className={classes.abs}>
                <p className={classes.mar}>Remote</p>
               
                <br/>
                <p className={classes.mar}>Music Player</p>
                
                <br/>
                <p className={classes.mar}>Image Processing</p>
                
                <br/>
                <p className={classes.mar}>Plotter</p>
               
                <br/>
                <p className={classes.mar}>Speech</p>
                <br/>
                
                <p className={classes.mar}>Update</p>
            </div>
        </Grid>
    );
}

export default ListComponent;
