import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from "./components/Onboarding";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
});

export default class App extends React.Component {
  async componentDidMount() {
    try {}
    catch (e) {
      console.warn(e)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Onboarding />
      </View>
    );
  }
}
