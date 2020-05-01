import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { auth } from '../../firebase/firebase';
import LocalDiningIcon from '@material-ui/icons/LocalDining';


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
        // '&:hover': {
        //     backgroundColor: 'green',
        //     color: '#FFF'
        // }
    }
}));

// HEADER with links
const Header = ({ currentUser }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Link to='/'>
                        <LocalDiningIcon />
                        </Link>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Anything For Food
            </Typography>
                    <Link className={classes.button} to='/shop'>
                        <Button className={classes.button} color="inherit">Order</Button>
                    </Link>
                    {/* checks if there is a current user to display login/logout */}
                    {
                        currentUser ?
                            <Button onClick={() => auth.signOut()} className={classes.button} color="inherit">Logout</Button>
                            :
                            <Link to='/login' className={classes.button}>
                                <Button className={classes.button} color="inherit">Login</Button>
                            </Link>
                    }
                    <ShoppingCartIcon />
                </Toolbar>
            </AppBar>
        </div>
    )
}


export default Header
