
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import HomeScreen from './Taps/Home';

function ChatScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}
function FavScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}
const Tab = createBottomTabNavigator();
export default function Mytaps({ navigation }) {
    return (
        <Tab.Navigator
            initialRouteName={'Home'}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    let color;
                    if (route.name == 'Home')
                        iconName = focused ? 'home' : 'home-outline'
                    else if (route.name == 'Chat')
                        iconName = focused ? 'chatbubbles' : 'chatbubbles-outline'
                    else if (route.name == 'Fav') {
                        iconName = focused ? 'heart' : 'heart-outline'
                        color = "red"
                    }

                    return <Ionicons name={iconName} size={26} color={color} />

                },
            })}
            activeColor="white"
            barStyle={{
                marginBottom: 2, width: "90%", height: 60, backgroundColor: "#404040",
                borderRadius: 15, overflow: 'hidden', position: 'absolute',
            }}
        >

            <Tab.Screen
                options={{ headerShown: false }}
                name="Chat" component={ChatScreen} />

            <Tab.Screen
                options={{ headerShown: false }}
                name="Home" component={HomeScreen} />

            <Tab.Screen
                options={{ headerShown: false }}
                name="Fav" component={FavScreen} />
        </Tab.Navigator>
    );
}