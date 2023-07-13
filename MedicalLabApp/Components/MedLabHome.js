import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MedLabHome = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.title}>Lab Tests</Text>
    </View>
  )
}

export default MedLabHome

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor:'ivory'
  },
  title: {
    textAlign: 'center',
    fontSize: 32
  }
})