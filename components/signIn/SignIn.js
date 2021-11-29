import React, { useState } from 'react';
import {  Text, View, TextInput, Button } from 'react-native';




function Signin({navigation}) {
    const [text, setText] = useState('');

    return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Logga in eller registrera dig</Text>
        
        <TextInput
            style={{height:40}}
            placeholder="användarnamn"
            onChangeText={text => setText(text)}
            defaultValue={text}
        />
        
        <Button 
            title="Logga in"
            onPress={() => navigation.navigate('Home', {
                user: text
            })}
        />
      </View>
      
    );
}

export default Signin;