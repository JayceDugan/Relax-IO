import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native';
import HText from "./HText";
import PText from "./PText";
import OnboardingButton from "./OnboardingButton";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentWrapper: {
    width: 242
  },
  headline: {
    textAlign: 'center',
    marginBottom: 15
  },
  paragraph: {
    textAlign: 'center'
  },
  illustration: {
    height: undefined,
    width: '100%',
    aspectRatio: 3/2,
    marginBottom: 60
  },
  nextWrapper: {
    marginTop: 60,
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  }
});

export default class OnboardingScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.container}>
        <Image source={require("../assets/couple-illustration.png")} style={styles.illustration}/>
        <View style={styles.contentWrapper}>
          <HText size="h1" weight="bold" align="center" spacing={15}>Reduce Stress</HText>
          <PText size="medium" align="center" spacing={0}>We are here to help you get rid of the stress you might have.</PText>
          <View style={styles.nextWrapper}>
            <OnboardingButton />
          </View>
        </View>
      </View>
    )
  }
}
