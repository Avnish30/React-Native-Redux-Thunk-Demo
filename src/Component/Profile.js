import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
//
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
const Profile = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <View
      style={{
        padding: 15,
        backgroundColor: 'white',
        height: '100%',
        // borderWidth: 1,
        // borderColor: 'red',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          name="arrow-back"
          style={{position: 'absolute', left: 0}}
          //   onPress={() => {
          //     props.navigation.openDrawer();
          //   }}
          size={30}
          color="#ff6363"
        />
        <Text style={{fontSize: 18}}>Profile</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          //   borderWidth: 1,
          //   borderColor: 'black',
        }}>
        <TouchableHighlight style={[styles.profileImgContainer]}>
          <Image
            source={{
              uri: 'https://source.unsplash.com/1600x900/?military',
            }}
            style={styles.profileImg}
          />
        </TouchableHighlight>
      </View>
      <View>
        <Text>Account</Text>
        <TextInput
          placeholder="@cmchandan"
          style={styles.input}
          onChangeText={onChangeText}
        />
        <Text>Name</Text>
        <TextInput
          placeholder="CM Chandan"
          style={styles.input}
          onChangeText={onChangeText}
          //   value={text}
        />
        <Text>Email</Text>
        <TextInput
          placeholder="chandan@gmail.com"
          style={styles.input}
          onChangeText={onChangeText}
        />
        <Text>Address</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Saharanpur"
        />
        <TouchableOpacity style={styles.btnTouchOp}>
          <Button
            color="#ff6363"
            style={[styles.socialLoginBt, {fontFamily: 'Roboto-Bold'}]}
            title="Confirm"></Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  profileImgContainer: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginTop: 10,
    marginBottom: 10,
    // borderWidth: 1,
    // borderColor: 'black',
  },
  input: {
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
    fontSize: 15,
    height: 35,

    padding: 0,
    paddingLeft: 5,
    marginBottom: 5,
    marginTop: 2,
  },
  profileImg: {
    height: 80,
    width: 80,
    borderRadius: 40,
    resizeMode: 'cover',
  },
  socialLoginBtn: {
    width: '100%',
    fontFamily: 'Roboto-Bold',
  },
  btnTouchOp: {
    height: 50,
    marginTop: 5,
  },
});

export default Profile;
