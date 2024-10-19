import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Screen_01 from './screens/screen_01';
import Screen_02 from './screens/screen_02';
// import Screen_03 from './screens/screen_03';
// import Screen_04 from './screens/screen_04';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen_01' screenOptions={{headerShown: false}}>
         <Stack.Screen name="screen_01" component={Screen_01}/>
         <Stack.Screen name="Screen_02" component={Screen_02}/>
        {/* <Stack.Screen name="Screen_03" component={Screen_03}/> */}
         {/* <Stack.Screen name="Screen_04" component={Screen_04}/> */}
      </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
