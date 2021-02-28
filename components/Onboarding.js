import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import OnboardingScreen from "./OnboardingScreen";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 1,
  },
  skip: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    position: 'absolute',
    top: 77,
    right: 30,
  }
});

export default class Onboarding extends React.Component {
  constructor(props) {
    super(props)

    this.skip = this.skip.bind(this)
  }

  skip() {}

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.skip} style={styles.skip}>
          <Text>Skip</Text>
        </TouchableOpacity>

        <View style={styles.inner}>
          <OnboardingScreen />
        </View>
      </View>
    )
  }
}
