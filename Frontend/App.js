import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListStoreComponent from './components/ListStoreComponent';
import HeaderComponent from './components/HeaderComponent.js';
import FooterComponent from './components/FooterComponent';
import CreateStoreComponent from './components/CreateStoreComponent';
import ViewStoreComponent from './components/ViewStoreComponent';
import ListSearchStoreComponent from './components/ListSearchStoreComponent';
import RegisterComponent from './components/RegisterComponent';
import HomeComponent from './components/HomeComponent';
import DashboardComponent from './components/DashboardComponent';
import AboutUs from './components/AboutUs';
import LoginComponent from './components/LoginComponent';
import ContactUs from './components/ContactUs';
import TermsandService from './components/TermsandService';
function App() {

  return (
    <div>
        <Router>
             <HeaderComponent/>
                <div className="container">
                    <Switch> 

                          <Route path = "/" exact component = {HomeComponent}></Route>
                          <Route path = "/home" component = {HomeComponent}></Route>
                          <Route path = "/about" component = {AboutUs}></Route>
                          <Route path = "/stores" component = {ListStoreComponent}></Route>
                          <Route path = "/add-store/:id" component = {CreateStoreComponent}></Route>
                          <Route path = "/view-store/:id" component = {ViewStoreComponent}></Route>
                          <Route path = "/search-stores/:searchKeyword" component = {ListSearchStoreComponent}></Route>
                          <Route path = "/register" component = {RegisterComponent}></Route>
                          <Route path = "/login" component = {LoginComponent}></Route>
                          <Route path = "/dashboard" component = {DashboardComponent}></Route>
                          <Route path = "/contact" component = {ContactUs}></Route>
                          <Route path = "/t&c" component = {TermsandService}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;