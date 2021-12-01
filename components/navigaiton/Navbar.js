import React from 'react';
import { Button } from 'react-native';


// import CreateEvent from "./components/createEvent/CreateEvent";
// import UserFlow from "./components/userflow/UserFlow";
import UserProfile from './components/profile/UserProfile';
import Massege from './components/messege/Massege';
import Signin from './components/signIn/SignIn';
import UserFlow from "./components/userflow/UserFlow";
import CreateEvent from "./components/createEvent/CreateEvent";
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