import React, { useState, useContext } from 'react';
import {  Text, View, TextInput, Button } from 'react-native';

import axios from 'axios';
import UserContext from '../UserContext';
import APIKit, {setClientToken}  from '../APIKit';

function Signin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [wrongLogin, setWrongLogin] = useState(false);
    const user = useContext(UserContext);

    const logInExistingUser = (e) => {
        e.preventDefault();
        const currentUser = { username, password };
        console.log(currentUser);
        
        // APIKit
        //     .post('http://localhost:3000/loggin', data)
        //     .then((res) => {
        //         console.log("the token ",res.data.cookie);
        //         setClientToken(res.data.cookie);

        //         user.setUsername(res.data.username);
        //         setUsername('');
        //         setPassword('');
        //         setWrongLogin(false);
        //         console.log("login!");
        //     })
        //     .catch(() => {
        //         setWrongLogin(true);
        //         console.log("not working!");
        //     });


        fetch("http://localhost:3000/login", {
            method: "POST",
            origin: "http://localhost:19006",

            credentials: 'include',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data =>{
            user.setUsername(data.username);
            setUsername('');
            setPassword('');
            setWrongLogin(false);
            console.log("login!");
        })
        .catch(() =>{
            setWrongLogin(true);
            console.log("not working!");
        });

    };

    return (
        <View>
            
        {wrongLogin && (
            <Text>
                Fel användarnamn eller lösenord. <br />
                Försök igen!
            </Text>
        )}
        <TextInput
            placeholder='Användarnamn'
            onChangeText={setUsername}
            value={username}

            // style={styles.input}
        />{' '}

        <TextInput
            placeholder='Lösenord'
            onChangeText={setPassword}
            value={password}

            // style={styles.input}
        />{' '}

        <Button 
            title="Logga in"
            onPress={(e) => logInExistingUser(e)}
        />
            

    </View>
      
    );
}

export default Signin;