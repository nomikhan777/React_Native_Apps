import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../assets/colors';
import img2 from '../assets/images/gas.png';
import TextField from '../components/inputFields/TextField';
import SecondaryButton from '../components/buttons/SecondaryButton';
import Entypo from 'react-native-vector-icons/Entypo';

const LoginScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            top: 10,
            right: 10,
          }}>
          <FontAwesome style={styles.logo} name="sign-in" size={20} />
          <Text style={styles.text}>Sign Up</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.logo1} source={img2} />
          <Text style={{ color: colors.Primary, margin: 10, fontSize: 25 }}>
            SERVIO
          </Text>
          <View style={{ margin: 70 }}>
            <View style={{ marginBottom: 30 }}>
              <TextField name="Username/Mobile Number" />
            </View>
            <View>
              <TextField name="Password" icon={'eye-with-line'} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('PasswordScreen')} title='Reset Password' style={{ alignSelf: 'flex-end', margin: 5 }}>
              <Text> Forgot Password</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 30, alignItems: 'center' }}>
              <SecondaryButton text="Login" />
            </View>
          </View>
        </View>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: colors.Secondary,
              marginLeft: 10,
            }}
          />
          <View>
            <Text
              style={{
                width: 50,
                textAlign: 'center',
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              OR
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: colors.Secondary,
              marginRight: 10,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
            Login With
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <Entypo
            style={{ backgroundColor: 'white' }}
            name="facebook-with-circle"
            size={40}
          />
          <Entypo
            style={{ backgroundColor: 'white' }}
            name="google--with-circle"
            size={40}
          />
        </View>


      </View>
      <Button onPress={() => navigation.navigate('Signup')} title='Signup Screen'></Button>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Primary,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    paddingLeft: 10,
    fontSize: 15,
  },
  logo: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 500,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  logo1: {
    width: 35,
    height: 35,
  },

  bottomView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});

export default LoginScreen;
