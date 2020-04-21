import React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appbar: {
        backgroundColor: 'darkorange'
    },
    button: {
        textDecoration: "none",
        color: 'white',
        '&:hover': {
            backgroundColor: 'green',
            color: '#FFF'
        }
    }
  }));

// HEADER with links
const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            Anything For Food
            </Typography>
            <Link className={classes.button} to ='/login'>
            <Button className={classes.button} color="inherit">Login</Button>
            </Link>
            <ShoppingCartIcon />
          </Toolbar>
        </AppBar>
      </div>
    )
}


export default Header
