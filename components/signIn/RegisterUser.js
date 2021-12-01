import React from 'react';
import { useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../UserContext';
import { View, Button, Text, TextInput } from 'react-native';

function RegisterUser() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const user = useContext(UserContext);

    const registerNewUser = (e) => {
        e.preventDefault();

        const data = { username, password };
        axios
            .post('https://localhost:3000/register', data, {
                withCredentials: true,
            })
            .then((res) => {
                user.setUsername(res.data.username);
                setUsername('');
                setPassword('');
            });
    };

    return (
        <View>
            <Text>Registrera ny användare:</Text>
            <TextInput
                keyboardType="email-address"
                placeholder='Välj användarnamn'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextInput
                keyboardType="visible-password"
                placeholder='Välj lösenord'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button 
                title="Registrera"
                onPress={(e) => registerNewUser(e)}
            />
        </View>
    );
}

export default RegisterUser;