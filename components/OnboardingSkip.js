import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 77,
    right: 30,
    zIndex: 1
  },
  skip: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
  }
});

export default props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.skip} style={styles.skip}>
        <Text>Skip</Text>
      </TouchableOpacity>
    </View>
  )
}
