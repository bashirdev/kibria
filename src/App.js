import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Carear from './componenets/Carear/Carear';

import Header from './componenets/Header'
import Home from './componenets/Home';
import Signup from './componenets/Signup/Signup';
function App() {
  return (
    <Router>
    <div className='main__app'>
    <div className='app__second'>
    <Header />
    <Switch>
    <Route exact path='/signup' component={Signup} />
    <Route exact path='/carear' component={Carear} />
      <Route exact path='/' component={Home} />
    </Switch>
     
       </div>
       </div>
    </Router>
  );
}

export default App;
