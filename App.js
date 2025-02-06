import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/Store'
import News from './src/components/screen/news/News';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NewsDetails from './src/components/screen/news/NewsDetails';

const Stack = createNativeStackNavigator();


export default function App() {
  return  (
    <Provider store={store} >
      <NavigationContainer>

      <Stack.Navigator screenOptions={{
        headerShown: false
        }} >
        <Stack.Screen name='NewsApp' component={News} />
        <Stack.Screen name="NewsDetails" component={NewsDetails}  />

      </Stack.Navigator>

      {/* <News /> */}
      </NavigationContainer >
    </Provider>
  )
}