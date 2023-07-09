import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center',gap:20}}>
      <Text>Home</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")}></Button>
      <Button title="Register"></Button>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})

