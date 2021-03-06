import React from 'react';
import { Text, View } from 'react-native';
import { useState } from 'react';

import Signin from './SignIn';
import RegisterUser from './RegisterUser';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from "react-router-dom";



function SignInPage() {
    const [newUser, setNewUser] = useState(false);
    return (
        <Router basename='/'>
            <View>
                <Text>EventPlaner</Text>

                <Routes>
                    <Route exact path='/' element={<Signin />}/>
                    <Route
                        exact path={'/Register'}
                        element={<RegisterUser/>}
                        onClick={() => setNewUser(!newUser)}
                    />
                </Routes>
                <View>
                    {!newUser ? (
                        <Link
                            to={'/Register'}
                            onClick={() => setNewUser(!newUser)}
                        >
                        <Text> Registrera ny användare </Text>
                        </Link>
                    ) : (
                        <Link
                            to={'/'}
                            onClick={() => setNewUser(!newUser)}
                        >
                        <Text> Har du redan konto? Logga in </Text>
                        </Link>
                    )}
                </View>
            </View>
        </Router>
    );
}


export default SignInPage;