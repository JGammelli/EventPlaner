import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, Button } from 'react-native';
import { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from './components/navigaiton/Navbar';

// import CreateEvent from "./components/createEvent/CreateEvent";
// import UserFlow from "./components/userflow/UserFlow";
// import UserProfile from './components/profile/UserProfile';
// import Massege from './components/messege/Massege';
import Signin from './components/signIn/SignIn';
// import UserFlow from "./components/userflow/UserFlow";
// import CreateEvent from "./components/createEvent/CreateEvent";
import UserContext from './components/UserContext';
import RegisterUser from './components/signIn/RegisterUser';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from "react-router-dom";
import SignInPage from './components/signIn/SignInPage';



function App() {

  const [username, setUsername] = useState();
    const [newUser, setNewUser] = useState(false);

    useEffect(() => {
        axios
            .get('https://localhost:3000/islogedin', {
                // withCredentials: true,
            })
            .then((res) => {
                setUsername(res.data.username);
            });
    }, []);

    const logOut = () => {
      console.log("Loggat ut");
        // axios
        //     .post(
        //         'https://cook-and-friends.herokuapp.com/user/logout',
        //         {},
        //         { withCredentials: true }
        //     )
        //     .then(() => {
        //         setUsername();
        //     });
    };

  return (
    <UserContext.Provider value={{ username: username, setUsername }}>
    {username !== undefined ? (
        <View>
            <View>
                <Button 
                title="Logga ut"
                onPress={logOut}/>               
                <Text>
                    Hej, {username}
                </Text>
            </View>
            <Navbar user={username} />
        </View>
    ) : (
        <SignInPage/>
    )}
</UserContext.Provider>
  );
}


export default App;
