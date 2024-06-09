import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Animated } from 'react-native';
import Welcome from './Secreens/Welcome';
import Login from './Secreens/Login';
import Register from './Secreens/Register';
import Books from './Secreens/Books';
import TabNavigator from './navigator/TabNavigator';
import Exercis7 from './Secreens/Exercis7';
import Enter from './Secreens/Enter';

const App = () => {
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
    'Arbaeen': require('./assets/fonts/Arbaeen.ttf'),
  });
  if (!fontsLoaded) 
  return null ;

  
const Stack = createNativeStackNavigator();
  return (
    <>
    <StatusBar style='dark' animated={true} />
    <NavigationContainer>
       <Stack.Navigator  initialRouteName='welcome'screenOptions={{headerShown: false ,}} >
        <Stack.Screen name=" Welcom " component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Books" component={Books} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Exercis7" component={Exercis7} />
        <Stack.Screen name="Enter" component={Enter} />
         </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App