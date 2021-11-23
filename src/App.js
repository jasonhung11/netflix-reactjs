import './App.css';
import Home from './Page/Home'
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import {LoginProvider } from './LoginContext';
import Signup from './Page/Signup';




function App() {

  return (
    <LoginProvider> 

      <div className="app">
        <Router>
          <Switch>

            <Route exact path='/'>
              <Home/>
            </Route>


            
          </Switch>
        </Router>
      </div>

    </LoginProvider>
    
  );
}

export default App;
