import {  Text, View, TextInput, Button } from 'react-native';
import React from 'react';
import { useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../UserContext';

function LoginUser() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [wrongLogin, setWrongLogin] = useState(false);

    const user = useContext(UserContext);

    const logInExistingUser = (e) => {
        e.preventDefault();

        const data = { username, password };
        axios
            .post('http://localhost:3000/loggin', data, {
                // withCredentials: true,
            })
            .then((res) => {
                user.setUsername(res.data.username);
                setUsername('');
                setPassword('');
                setWrongLogin(false);
                console.log("login!");
            })
            .catch(() => {
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

export default LoginUser;