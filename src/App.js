import './App.css';
import {useState,useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Brands from './components/brands';
import BrandsModals from './components/brandsmodals';
import PhoneModal from './components/phonemodal';

const axios = require('axios');


function App() {
  
  return (
  <Router>
      <div className="mobile-app">
        <nav><ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/phones">Brands Phones</Link></li>
         </ul></nav>
       <Switch>
          <Route exact path="/" component={Brands}/>
          <Route path="/phones" component={BrandsModals}/>
          <Route path="/dashboard" component={PhoneModal}/>
        </Switch>
      </div>
   
    </Router>
  );
}

export default App;
