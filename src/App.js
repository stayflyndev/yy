import React from 'react';
import Homepage from './pages/Homepage/Homepage.component'
import './App.css';
import {Route, Switch} from 'react-router-dom';
import shopPage from './pages/Shopping/Shop.component'

 const constantName = () => (
   <div>
 test comp
   </div>
 )
 //Switch is going to really restrict what renders based on the path
function App() {
  return (
    <div> 
      <Switch> 
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop' component={shopPage} />

      <Route exact path='/mexican' component={shopPage} />
      <Route  path='/bbq' component={shopPage} />
      <Route exact path='/chinese' component={shopPage} />
      <Route  path='/jamaican' component={shopPage} />
      </Switch>
    </div>
  );
}

export default App;
