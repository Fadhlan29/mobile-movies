import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import MovieScreen from './src/screens/MovieScreen'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerShown: false
       }}>
        <Stack.Screen name='home' component={HomeScreen}/>
        <Stack.Screen name='movie' component={MovieScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App