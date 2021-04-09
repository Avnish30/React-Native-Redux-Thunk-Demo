import React, {useState, useEffect} from 'react';
import {openDatabase} from 'react-native-sqlite-storage';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {connect} from 'react-redux';
import {Add, deleteData} from '../Action/actionTypes';
import {createAction} from '../Action/action';

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
    props.navigation.openDrawer();
    props.changeName(deleteData, null, null);
  };
  useEffect(props => {
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
      <Button
        style={styles.btn}
        title="logout"
        onPress={() => handleLogout()}
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
