import React from 'react';
import Homepage from './pages/Homepage/Homepage.component'
import './App.css';
import {Route, Switch} from 'react-router-dom';
import shopPage from './pages/Shopping/Shop.component'
import Header from './components/Header/Header.component'
import LoginPage from './pages/Login/Login.component';
import RegisterPage from './pages/Login/Register.component'


 const constantName = () => (
   <div>
 test comp
   </div>
 )
 //Switch is going to really restrict what renders based on the path
function App() {
  return (
    <div> 
      <Header />
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

export default App;
