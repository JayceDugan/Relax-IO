import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import OnboardingScreen from "./OnboardingScreen";
import OnboardingScreensContent from '../content/onboardingScreens.json'
import OnboardingSkip from "./OnboardingSkip"
import OnboardingPrevious from "./OnboardingPrevious"

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
  }
});

export default class Onboarding extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      initialStage: 0,
      currentStage: 0,
      finalStage: 2,
      hasGonePastInitialStage: false,
      stages: [
        {
          illustration: require("../assets/couple-illustration.png"),
          headline: "Reduce Stress",
          description: "We are here to help you get rid of the stress you might have."
        },
        {
          illustration: require("../assets/girl-glass-illustration.png"),
          headline: "Constant Support",
          description: "We are always here to support you no matter what."
        },
        {
          illustration: require("../assets/man-window-illustration.png"),
          headline: "Stay Energized",
          description: "Our app will help you to stay energized all the time."
        }
      ]
    }

    this.nextStageHandler = this.nextStageHandler.bind(this)
    this.previousStageHandler = this.previousStageHandler.bind(this)
    this.skipHandler = this.skipHandler.bind(this)
  }

  get isFirstStage() {
    return this.state.currentStage === this.state.initialStage
  }

  get isFinalStage() {
    return this.state.currentStage === this.state.finalStage
  }

  get nextAllowed() {
    return !this.isFinalStage
  }

  get prevAllowed() {
    return !this.isFirstStage
  }

  get skipAllowed() {
    return !this.isFirstStage
  }

  get stageContent() {
    return this.state.stages[this.state.currentStage]
  }

  get stageIllustration() {
    return this.stageContent.illustration
  }

  get stageHeadline() {
    return this.stageContent.headline
  }

  get stageDescription() {
    return this.stageContent.description
  }

  incrementStageCount() {
    this.setState({
      currentStage: this.state.currentStage + 1
    })
  }

  decrementStageCount() {
    this.setState({
      currentStage: this.state.currentStage - 1
    })
  }

  nextStageHandler() {
    if (this.nextAllowed) {
      this.progressToNextStage()
      this.runStageProgressChecks()
    }
  }

  previousStageHandler() {
    if (this.prevAllowed) {
      this.returnToPreviousStage()
    }
  }

  progressToNextStage() {
    this.incrementStageCount()
  }

  returnToPreviousStage() {
    this.decrementStageCount()
  }

  runStageProgressChecks() {
    this.checkInitialStageProgressFlag()
  }

  checkInitialStageProgressFlag() {
    const userHasProgressed = this.state.currentStage !== this.isFirstStage
    const flagRequiresUpdate = userHasProgressed && !this.state.hasGonePastInitialStage

    if (flagRequiresUpdate) {
      this.setState({ hasGonePastInitialStage: true })
    }
  }

  skipHandler() {
    this.setState({ currentStage: this.state.finalStage })
  }

  render() {
    return (
      <View style={styles.container}>
        <OnboardingSkip skip={this.skipHandler} />
        <OnboardingPrevious previous={this.previousStageHandler} />

        <View style={styles.inner}>
          <OnboardingScreen next={this.nextStageHandler}
            illustration={this.stageIllustration}
            headline={this.stageHeadline}
            description={this.stageDescription}
          />
        </View>
      </View>
    )
  }
}
