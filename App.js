import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateEvent from "./components/createEvent/CreateEvent";
import UserFlow from "./components/userflow/UserFlow";
import Home from './components/home/Home';
import UserProfile from './components/profile/UserProfile';
import Massege from './components/messege/Massege';
import Signin from './components/signIn/SignIn';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen name="Signin" component={Signin}/>

        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Flow" component={UserFlow} />
        <Stack.Screen name="Profile" component={UserProfile} />
        <Stack.Screen name="Create" component={CreateEvent} />
        <Stack.Screen name="Msg" component={Massege} />
      </Stack.Navigator>
    </NavigationContainer>



  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    },
});

export default App;
