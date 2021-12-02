import React from 'react';
import { Button, View } from 'react-native';


import UserProfile from '../profile/UserProfile';
import Massege from '../messege/Massege';
import Signin from '../signIn/SignIn';
import UserFlow from "../userflow/UserFlow";
import CreateEvent from "../createEvent/CreateEvent";


import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from "react-router-dom";


function Navbar(username) {


    return (
        <Router>   
            <View id="nav">
                <Link style={{ textDecoration: 'none' }} to="/"><Button title="Flöde"/></Link>
                <Link style={{ textDecoration: 'none' }} to="/UserProfile"><Button title="Profil"/></Link>
                <Link style={{ textDecoration: 'none' }} to="/Massege"><Button title="Medelande"/></Link>
            </View>
            
            <Signin/>
            <Routes>
            <Route exact path="/UserProfile" element={<UserProfile/>}/>
                
            <Route exact path="/Massege" element={<Massege/>}/>
                
            <Route exact path="/" element={<UserFlow/>}/>
            
            <Route exact path="/CreateEvent" element={<CreateEvent/>}/>
            </Routes>
        </Router>
    );
}

export default Navbar;