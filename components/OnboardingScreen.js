import React from 'react'
import { StyleSheet, View, Text, Image, Animated } from 'react-native';

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
  state = {
    opacity: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this.state.opacity, {
      duration: 300,
      toValue: 1
    }).start()
  }

  componentDidUpdate() {
     Animated.sequence([
        Animated.timing(this.state.opacity,
          {
            toValue: 0,
            duration: 300
          }
        ),
         Animated.timing(this.state.opacity,
         {
           toValue: 1,
           duration: 300
         }
       )
     ]).start()
  }

  componentWillUnmount() {
    Animated.timing(this.state.opacity, {
      duration: 300,
      toValue: 0
    }).start()
  }

  // useEffect(() => {
  //  }, [fadeAnim])

  render() {
    return (
      <Animated.View
        style={{
          ...styles.container,
          opacity: this.state.opacity,
          transform: [{
            translateX: this.state.opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [-150, 0]
            })
          }]
        }}
      >
        <Animated.Image
          onLoad={}
          source={this.props.illustration}
          style={styles.illustration}
        />
        <View style={styles.contentWrapper}>
          <HText size="h1" weight="bold" align="center" spacing={15}>{ this.props.headline }</HText>
          <PText size="medium" align="center" spacing={0}>{ this.props.description }</PText>
          <View style={styles.nextWrapper}>
            <OnboardingButton next={this.props.next} />
          </View>
        </View>
      </Animated.View>
    )
  }
}
