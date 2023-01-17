import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './Sign/Signup';
import Mytaps from './Sign/TapScreen';
import Signinfo from './Sign/Signupinfo';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        options={{headerShown:false}}
        name="Signup" component={Signup} />
        <Stack.Screen 
        options={{headerShown:false}}
        name="Signinfo" component={Signinfo} />
        <Stack.Screen 
        options={{headerShown:false}}
        name="Taps" component={Mytaps} />
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
