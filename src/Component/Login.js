import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {openDatabase} from 'react-native-sqlite-storage';
import firebase from '@react-native-firebase/app';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {connect} from 'react-redux';
import {Add, deleteData} from '../Action/actionTypes';
import {createAction} from '../Action/action';
// const config = {};
// firebase.initializeApp(config);
const db = openDatabase({name: 'userDb.db'});
function Login(props) {
  console.log(props);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const handleLogin = () => {
    props.changeName(Add, username, password);
    props.navigation.navigate('Home');
    // insertData();
    setUsername(null);
    setPassword(null);
  };
  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    GoogleSignin.signOut();
    LoginManager.logOut();
  };
  async function onGoogleButtonPress() {
    // Get the users ID token
    console.log('under google');
    const {idToken} = await GoogleSignin.signIn();
    console.log(idToken);
    console.log(await GoogleSignin.getCurrentUser());
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log(googleCredential);
    // Sign-in the user with the credential
    return await auth().signInWithCredential(googleCredential);
  }
  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    console.log(data);

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return await auth().signInWithCredential(facebookCredential);
  }
  useEffect(props => {
    // console.log(auth.getCurrentAccessToken());
    GoogleSignin.configure({
      webClientId:
        '48541765522-uo4uk98h0cmpb6to7uu2bo520h8qo70k.apps.googleusercontent.com',
    });
    // props.navigation.setOptions({
    //   headerRight: () => (
    //     <Button
    //       onPress={() => props.navigation.openDrawer()}
    //       title="Update count"
    //     />
    //   ),
    // });
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Student_Table'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Student_Table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Student_Table(username VARCHAR(30),password VARCHAR(255))',
              [],
            );
          }
        },
      );
    });
  }, []);

  const insertData = () => {
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO Student_Table (username, password) VALUES (?,?)',
        [username, password],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            alert('Data Inserted Successfully....');
          } else Alert.alert('Failed....');
        },
      );
    });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login</Text>
      <TextInput
        value={username}
        onChangeText={text => setUsername(text)}
        style={styles.input}
        placeholder="username"
      />
      <TextInput
        onChangeText={text => setPassword(text)}
        value={password}
        style={styles.input}
        placeholder="password"
      />
      <TouchableHighlight style={styles.btn}>
        <Button title="login" onPress={() => handleLogin()} />
      </TouchableHighlight>
      <TouchableHighlight style={styles.btn}>
        <Button title="logout" onPress={() => handleLogout()} />
      </TouchableHighlight>
      <TouchableHighlight style={styles.btn}>
        <Button
          title="fb login"
          onPress={() =>
            onFacebookButtonPress().then(() =>
              console.log('Signed in with Facebook!'),
            )
          }
        />
      </TouchableHighlight>
      <GoogleSigninButton
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          )
        }
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        // onPress={this._signIn}
      />
    </View>
  );
  //   props.navigation.navigate('Home')
}
const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  btn: {
    margin: 20,
  },
});

const mapDispatchToProps = dispatch => {
  console.log('chandan dispatch');
  return {
    changeName: (type, name, pass) => {
      console.log('dispatch calll');
      dispatch(createAction(type, {uNAme: name, passwrd: pass}));
      console.log('dispatch calll');
    },
  };
};
const mapStateToProps = state => {
  console.log('chandan' + state);
  return {
    usrNAme: state.userName,
    Passwrd: state.Password,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
