import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import { withRouter } from 'react-router-dom'; // higher order component 



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'grey'
    },
    container: {
        padding:theme.spacing(8),
        background: 'beige',
        height: '100vh'
        
    },
    grid: {
        padding:theme.spacing(4),

    },
    name : {
        color: 'yellow'
    },
    title:{
        color: 'white'
    },
    tilebar:{
        
        left: 0,
    right: 0,
    height: '48px',
    display: 'flex',
    position: 'absolute',
    background: 'rgba(0, 0, 0, .87)'
    },
    icon: {
        color: 'red',
    }
   

  }));


const MenuItem = ({title, imageURL, history, linkUrl, match}) => {
    const classes = useStyles();
   
    return (
        <div onClick={() => 
        history.push(`${match.url}${linkUrl}`)}>
            <GridListTileBar className={classes.tilebar}
              title={<span className={classes.title} >{title} </span>}
              subtitle={<span className={classes.name}>Click here to order: {title} </span>}
              actionIcon={
                <IconButton aria-label={`info about ${title}`} className={classes.icon}>
                  <FastfoodIcon className={classes.icon}/>        
               </IconButton>
              }
            />  
        </div>
        
    ) 
}


// higher order components with access to Router props

export default withRouter(MenuItem)
;