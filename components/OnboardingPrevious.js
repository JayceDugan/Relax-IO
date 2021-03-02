import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

const styles = StyleSheet.create({
  previous: {
    position: 'absolute',
    top: 77,
    left: 30,
    zIndex: 1
  },
  button: {
    flex: 1,
    height: 30,
    width: 30,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  arrow: {
    height: undefined,
    width: 23,
    aspectRatio: 3/2,
    resizeMode: "contain"
  }
});

export default props => {
  return (
    <View style={styles.previous}>
      <TouchableOpacity onPress={props.previous} style={styles.button}>
        <Image source={require('../assets/black-arrow-left.png')} style={styles.arrow} />
      </TouchableOpacity>
    </View>
  )
}
