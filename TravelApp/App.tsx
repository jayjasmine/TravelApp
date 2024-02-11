import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import AddLocationScreen from './src/screens/AddLocationScreen/AddLocationScreen'; // Adjust the path as needed
import LocationsScreen from './src/screens/LocationsScreen/LocationsScreen';
import ExploreScreen from './src/screens/ExploreScreen/ExploreScreen';
import EatConfigScreen from './src/screens/ConfigScreens/EatConfigScreen/EatConfigScreen';
// import LoginScreen from './src/screens/LoginScreen/LoginScreen';

// Components

const Stack = createNativeStackNavigator();

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LocationsScreen">
        <Stack.Screen name="Locations" component={LocationsScreen} />
        <Stack.Screen name="Add Location" component={AddLocationScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="Eat" component={EatConfigScreen} />
        {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
