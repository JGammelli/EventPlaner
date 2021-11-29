import React from 'react';
import {  Text, View,  Button } from 'react-native';




function CreateEvent({route, navigation}) {
    const {user} = route.params;
    return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{user}Admin</Text>
        <TextInput
            style={{height:40}}
            placeholder="Namn på event"
            onChangeText={text => setText(text)}
            defaultValue={text}
        />
        <TextInput
            style={{height:40}}
            placeholder="Datum och tid"
            onChangeText={text => setText(text)}
            defaultValue={text}
        />
      </View>
    );
}

export default CreateEvent;



const handleOnClick = () => {
    const resp = fetch('http://localhost:3000/', {
        method: 'POST',
        body: JSON.stringify({
            Id: 3,
            Title: "testing",
            
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
};