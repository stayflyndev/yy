import React from 'react';
import Homepage from './pages/Homepage/Homepage.component'
import './App.css';
import {Route, Switch} from 'react-router-dom';

 const constantName = () => (
   <div>
 jj
   </div>
 )
function App() {
  return (
    <div> 
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/mexican' component={constantName} />
      <Route  path='/bbq' component={constantName} />



      </Switch>
    </div>
  );
}

export default App;
