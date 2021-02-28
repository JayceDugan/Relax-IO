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

import {
  getFontSize,
  getFontFamily,
  getTextAlignment,
  getSpacing
} from '~/utils/HTextUtils.js'

export default props => {
  const styles = StyleSheet.create({
    text: {
      fontSize: getFontSize(props),
      fontFamily: getFontFamily(props),
      textAlign: getTextAlignment(props),
      marginBottom: getSpacing(props),
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
