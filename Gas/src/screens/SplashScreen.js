import { View, Text, StyleSheet, Image, Button } from 'react-native';
import React from 'react';
import colors from '../assets/colors';
import img1 from '../assets/images/gas.png';

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={img1} />
      <Text style={styles.text}>SERVIO</Text>
      <Button onPress={() => navigation.navigate('LoginScreen')} title='next screen'></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.Secondary,
    fontFamily: 'Poppins-Regular',
    fontSize: 40,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default SplashScreen;
