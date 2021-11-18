import logo from './logo.svg';
import './App.css';
import Home from './Page/Home'
import React, {useState, useEffect, useContext} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Login from './Page/Login'
import { LoginContext, LoginProvider } from './LoginContext';



function App() {

  return (
    <LoginProvider> 
      <div className="app">
        <Router>
          <Routes>

            <Route exact path='/' element={<Home></Home>}/>
            <Route path='/about' element={<h1>ABout page</h1>}/>
            
          </Routes>
        </Router>
      </div>

    </LoginProvider>
    
  );
}

export default App;
