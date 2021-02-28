import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold
} from '@expo-google-fonts/nunito';

export default props => {
  const getFontSize = () => {
    const fontSizes = {
      map: {
        h1: 25,
        h2: 22,
        h3: 19,
        h4: 17,
        h5: 15,
        default: 19
      },
      get keys() {
        return Object.keys(this.map)
      },
      get default() {
        return this.map.default
      }
    }

    return fontSizes.keys.includes(props.variant)
      ? fontSizes.keys[props.variant]
      : fontSizes.default
  }

  const getFontFamily = () => {
    const fontWeights = {
      map: {
        'bold': 'Nunito_700Bold',
        'semibold': 'Nunito_600SemiBold',
        'regular': 'Nunito_400Regular',
        'light': 'Nunito_300Light'
      },
      get keys() {
        return Object.keys(this.map)
      },
      get default() {
        return this.map.default
      }
    }

    return fontWeights.keys.includes(props.weight)
      ? fontWeights.map[props.weight]
      : fontWeights.default
  }

  const getTextAlignment = () => {
    const map = [
      'center',
      'left',
      'right'
    ]

     return map.includes(props.align)
       ? props.align
       : 'left'
  }

  const getSpacing = () => {
    return props.spacing ?? 15
  }

  const styles = StyleSheet.create({
    text: {
      fontSize: getFontSize(),
      fontFamily: getFontFamily(),
      textAlign: getTextAlignment(),
      marginBottom: getSpacing(),
      lineHeight: 33
    }
  })

  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_400Regular,
    Nunito_300Light
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <Text style={styles.text}>{ props.children }</Text>
      </View>
    );
  }
};
