import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TelegramIcon from '@material-ui/icons/Telegram';
import { Link } from 'react-router-dom';
import { signInWithGoogle} from '../../firebase/firebase'
import { render } from '@testing-library/react';
import { withStyles } from '@material-ui/core/styles';
import {auth, createUserProfile} from '../../firebase/firebase'



const useStyles = (theme) => ({
    paper: {
      // marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      // margin: theme.spacing(1),
      // backgroundColor: theme.palette.secondary.main,
      backgroundColor: 'darkorange'
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      // marginTop: theme.spacing(1),
    },
    submit: {
      // margin: theme.spacing(3, 0, 2),
    },
    icon: {
        color: 'darkorange',
     
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
  });

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link style={{textDecoration: 'none'}} color="inherit" to="/">
          Anything for Food by Tori
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

 class Register extends Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
          };
          }

        handleSubmit = async e => {

        }
    
          handleChange = e => {
            const {name, value} = e.target;
            this.setState({[name]: value})
          }
        

    render() {
    const{ classes }= this.props;

        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div>

<Container component="main" maxWidth="xs">

                <Typography component="h1" variant="h5">
          Dont have an account ?
        </Typography>
        <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="displayname"
            label="display name"
            name="displayName"
            autoComplete="text"
            autoFocus
            value={displayName}
            onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={this.handleChange}

          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={this.handleChange}

          />
               <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="cpassword"
            autoComplete="current-password"
            value={confirmPassword}
            onChange={this.handleChange}

          />
        
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
         

          <Grid container>
            
            <Grid item>
    
            </Grid>
          </Grid>
        </form>
        <div>
        <Box mt={8}>
        <Copyright />
      </Box>
      </div>
        </Container>
            </div>
        )
    }
}

export default withStyles(useStyles)(Register)