import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//Screens
import Dashboard from './app/src/screens/Dashboard/Dashboard';
import CategoryProducts from './app/src/screens/CategoryProducts/CategoryProducts';
import CartScreen from './app/src/screens/CartScreen/CartScreen';

function App () {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{animationEnabled: false}}>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CategoryProducts"
        component={CategoryProducts}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
export default App;
