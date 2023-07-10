import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Vector Icons
import { Ionicons, Feather, FontAwesome5, FontAwesome } from 'react-native-vector-icons'

//Navigation Imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Component Imports
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import MedLabHome from "./Components/MedLabHome";
import Settings from './Components/Settings';
import { DefaultTheme, Provider } from 'react-native-paper';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeBottomTabs() {
  return (
    <Provider theme={{
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        secondaryContainer: 'transparent', // Use transparent to disable the little highlighting oval
      },
    }}>

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
    </Provider >

  )
}

function MyDrawer() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="HomeBottomTabs" component={HomeBottomTabs} options={{ headerTitle: 'Home', headerStyle: { backgroundColor: 'skyblue' } }} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer
    // theme={{ colors: { secondaryContainer: 'transparent' } }}
    >
      <Stack.Navigator initialRouteName='HomeBottomTabs'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false, headerTitle: 'Medical Laboratories', headerStyle: { backgroundColor: 'skyblue' } }} />
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
