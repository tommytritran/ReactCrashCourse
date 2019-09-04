import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import { Name } from './Components/Name';
import { Home } from './Components/Home';
import  NavBar from './Components/NavBar';
import { Router } from './Router';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Fragment >
            <NavBar></NavBar>
            <Router></Router>
          </Fragment>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
