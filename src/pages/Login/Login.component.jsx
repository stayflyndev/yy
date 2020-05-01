import React from 'react';
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
import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {auth, createUserProfile} from '../../firebase/firebase'
import Register from './Register.component'


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



  
 class SignIn extends Component  {
   constructor() {
   super();

   this.state = {
     email: '',
     password: '',
     };
   }

  handleSubmit = async e => {
    e.preventdefault();

    const { email, password} = this.state;

  
    try {
  await auth.createUserWithEmailAndPassword(email, password)
 this.setState({

  email: '',
  password: '',
  
 })
    } catch (error) {
      console.log(error)
    }
  }

  // reads inputs of the form

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }




// APP DISPLAY
  render() {
    const{ classes }= this.props;
    const { displayName, email, password, confirmPassword } = this.state;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
       
          <TelegramIcon className={classes.icon}/>
     
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
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
            vslue={password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.handleSubmit}
          >
            Sign In
          </Button>
          <Button
            onClick={signInWithGoogle}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
        Sign in With Google</Button>

          <Grid container>
            <Grid item xs>
              <Link to='/'>
                Forgot password?
              </Link> or
            
            </Grid>
            <Grid item>
    
            </Grid>
          </Grid>
        </form>

        
    
      </div>
 
    </Container>
  );
}
 }
export default withStyles(useStyles)(SignIn);