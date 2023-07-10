import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20 }}>
            <TouchableOpacity onPress={() => navigation.replace('HomeBottomTabs')}>
            {/* <TouchableOpacity onPress={() => navigation.replace('MedLabHome')}> */}
                <Image source={require('../assets/HomeLogo.jpg')}></Image>
            </TouchableOpacity>
            <Button title="Login" onPress={() => navigation.navigate("Login")}></Button>
            <Button title="Register"></Button>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})

