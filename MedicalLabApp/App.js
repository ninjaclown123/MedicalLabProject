import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Vector Icons
import { Ionicons, Feather, FontAwesome5, FontAwesome } from 'react-native-vector-icons'

//Navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



//Component Imports
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import MedLabHome from "./Components/MedLabHome";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeBottomTabs() {
  return (
    <Tab.Navigator
      style={[styles.tab, {}]}
      barStyle={[styles.tabBar, {}]}
      activeColor="black"
      inactiveColor="grey"
      backBehavior='none'

    >
      <Tab.Screen name="MedLabHome"
        component={MedLabHome}

        options={{
          tabBarLabel: 'Home', tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="ios-home" size={28} color={focused ? 'black' : 'grey'} />
          )
        }} />
      <Tab.Screen name="Register" component={Register} />
    </Tab.Navigator>

  )
}

export default function App() {
  return (
    <NavigationContainer
      theme={{ colors: { secondaryContainer: 'transparent' } }}
    >
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeBottomTabs" component={HomeBottomTabs} options={{headerTitle:'Medical Laboratories', headerStyle: { backgroundColor: 'skyblue' } }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  tab: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  tabBar: {
    borderTopColor: 'black',
    borderTopWidth: 1,
    backgroundColor: 'skyblue',
    maxHeight: 70
  }
});
