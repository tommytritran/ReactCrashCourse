import React from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import About from "./Components/About";
import Profile from "./Components/Profile";

export const Router = () =>(
    <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/Profile/:id" component={Profile}></Route>

        <Redirect from="/" exact to ="/home"></Redirect>
    </Switch>
);

export default Router;