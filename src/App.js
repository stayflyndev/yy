import React, {
  Component
} from 'react';
import Homepage from './pages/Homepage/Homepage.component'
import './App.css';
import {
  Route,
  Switch
} from 'react-router-dom';
import shopPage from './pages/Shopping/Shop.component'
import Header from './components/Header/Header.component'
import LoginPage from './pages/Login/LoginAndSignUp';
import RegisterPage from './pages/Login/Register.component';
import {
  auth,
  createUserProfile
} from './firebase/firebase';


class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeAuthUser = null;

  /*
  // assigning the state of currentUser object to the User that gets logged in
  //whenever changes happen, sends the user updated
  //always open subscription as long as component is mounted

  we want to store the user data in our "state" to be used in the app
  */


  componentDidMount() {
    this.unsubscribeAuthUser = auth.onAuthStateChanged(async authuser => {
      createUserProfile(authuser)

      if(authuser){
        // check for updates
        const userReference = await createUserProfile(authuser);
        console.log(authuser)
        userReference.onSnapshot(snapshot =>
        {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => {
            console.log(this.state)

          })
        })
      }
      this.setState({currentUser: authuser})
    })
  }

  // closes the subscription 
  componentWillUnmount() {
    this.unsubscribeAuthUser();
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
