import React from 'react';
import { Text, View, Button } from 'react-native';




function Home({route, navigation}) {

    const {user} = route.params;

    return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Colligare</Text>
        <Text>{user}</Text>
        <Button
            title="Medelande"
            onPress={() => navigation.navigate('Msg')}
        />

        <Button
            title="Gå till Flöde"
            onPress={() => navigation.navigate('Flow')}
        />
        <Button
            title="Gå till skapa event"
            onPress={() => navigation.navigate('Create', {
                user: user
            })}
        />
         <Button
            title="Gå till profil"
            onPress={() => navigation.navigate('Profile')}
        />
      </View>
    );
}

export default Home;