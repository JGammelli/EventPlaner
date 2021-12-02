import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from './components/navigation/Navbar';
import UserContext from './components/UserContext';
import SignInPage from './components/signIn/SignInPage';
import axios from 'axios';
import { Text, View, Button, PushNotificationIOS } from 'react-native';


import APIKit, {setClientToken} from './components/APIKit';


function App() {
    axios.defaults.withCredentials = true;

    const [username, setUsername] = useState();
    const [newUser, setNewUser] = useState(false);
    useEffect(() => {
        console.log("checks loggin");
        
        
        fetch("http://localhost:3000/islogedin", {
            method: "POST",
            origin: "http://localhost:19006",

            credentials: 'include',
            headers:{
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': "http://localhost:19006"
            }
        })
        .then((res) => {
            setUsername(res.username);
        });
        
        // APIKit
        // .get('http://localhost:3000/islogedin', {
            
        // })
        // .then((res) => {
        //     setUsername(res.data.username);
        // });

    }, []);

    const logOut = () => {
      console.log("Loggat ut");
        // axios
        //     .post(
        //         'https://localhost:3000/logout',
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
