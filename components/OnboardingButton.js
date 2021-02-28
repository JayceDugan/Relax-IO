import React from 'react'
import { TouchableOpacity, Image, StyleSheet, View } from "react-native";

export default props => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#000',
      position: 'relative',
      height: 64,
      width: 64,
      borderRadius: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    arrow: {
      height: undefined,
      width: 23,
      aspectRatio: 3/2,
      resizeMode: "contain"
    }
  })

  return (
    <View>
      <TouchableOpacity onPress={props.next} style={styles.button}>
        <Image style={styles.arrow} source={require('../assets/white-arrow-right.png')} />
      </TouchableOpacity>
    </View>
  )
}
