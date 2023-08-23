import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MovieScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Text>Movie Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})

export default MovieScreen