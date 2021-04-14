import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
const NewLogin = () => {
  return (
    <View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          //   borderWidth: 2,
          //   borderColor: 'red',
          marginBottom: 20,
        }}>
        <TouchableHighlight style={[styles.profileImgContainer]}>
          <Image
            source={{
              uri: 'https://source.unsplash.com/1600x900/?sea,water,nature',
            }}
            style={styles.profileImg}
          />
        </TouchableHighlight>
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',

          alignItems: 'center',
          //   borderWidth: 2,
          //   borderColor: 'black',
        }}>
        <Text style={{fontFamily: 'Roboto-Regular', color: 'grey'}}>
          Picking your travel destinations
        </Text>
        <View
          style={{
            height: 15,
            width: 50,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View style={[styles.dot, {backgroundColor: '#ff6363'}]}></View>
          <View style={[styles.dot, {backgroundColor: 'grey'}]}></View>
          <View style={[styles.dot, {backgroundColor: 'grey'}]}></View>
          <View style={[styles.dot, {backgroundColor: 'grey'}]}></View>
        </View>
        <TouchableOpacity style={styles.btnTouchOp}>
          <Button
            color="#4267B2"
            style={styles.socialLoginBtn}
            title="Login with Facebook"></Button>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnTouchOp}>
          <Button
            color="#ff6363"
            style={[styles.socialLoginBt, {fontFamily: 'Roboto-Bold'}]}
            title="Sign in"></Button>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'space-between',
            // borderWidth: 2,
            // borderColor: 'black',
            width: 300,
          }}>
          <Text>Haven`t registered yet?</Text>
          <Text style={{color: '#ff6363'}}>Join Now</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  profileImgContainer: {
    marginLeft: 8,
    height: 200,
    width: 200,
    borderRadius: 100,
    marginTop: 20,
    marginBottom: 10,
  },
  profileImg: {
    height: 200,
    width: 200,
    borderRadius: 100,
    resizeMode: 'cover',
  },
  socialLoginBtn: {
    width: '100%',
    fontFamily: 'Roboto-Bold',
  },
  btnTouchOp: {
    width: 300,
    height: 50,
    marginTop: 5,
  },
  dot: {
    width: 7,
    height: 7,

    borderRadius: 4,
  },
});
export default NewLogin;
