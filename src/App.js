import React, {Component} from 'react';
import Homepage from './pages/Homepage/Homepage.component'
import './App.css';
import {Route, Switch} from 'react-router-dom';
import shopPage from './pages/Shopping/Shop.component'
import Header from './components/Header/Header.component'
import LoginPage from './pages/Login/Login.component';
import RegisterPage from './pages/Login/Register.component';
import {auth} from './firebase/firebase';


class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null
  // assigning the state of currentUser object to the User that gets logged in
  //whenever changes happen, sends the user updated
  //always open subscription as long as component is mounted
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})
      console.log(user)
    })
  }

  // closes the subscription 
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }



 render() {
  return (
    <div> 
      <Header currentUser={this.state.currentUser}/>
      {/*  Switch is going to really restrict what renders based on the path */}
      <Switch>  
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop' component={shopPage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/register' component={RegisterPage} />
      <Route exact path='/mexican' component={shopPage} />
      <Route  path='/bbq' component={shopPage} />
      <Route exact path='/soulfood' component={shopPage} />
      <Route  path='/jamaican' component={shopPage} />
      </Switch>
    </div>
  );
 }
}

export default App;
