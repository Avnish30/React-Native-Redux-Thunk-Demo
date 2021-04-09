import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {GetDataPost} from '../Action/action';
import {View, Text, Button, TouchableHighlight, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

function Home(props) {
  console.log(props);
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res1 => console.log(res1[0].body));
  };
  useEffect(() => {
    props.getDataPost();
  }, []);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#5aebf4',
          padding: 5,
        }}>
        <Icon
          name="menu"
          onPress={() => {
            props.navigation.openDrawer();
          }}
          size={30}
          color="#900"
        />
      </View>
      <View>
        <Text onPress={() => props.navigation.navigate('Login')}>HOME</Text>
        <Text>hello {props.username}</Text>
        <TouchableHighlight style={styles.btn}>
          <Button title="get data" onPress={() => getData()} />
        </TouchableHighlight>
      </View>
    </View>
  );
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
    getDataPost: () => {
      console.log('dispatch calll');
      dispatch(GetDataPost());
      console.log('dispatch callled');
    },
  };
};
const mapStateToProps = state => {
  console.log(
    state.post + ' ' + state.userData.userName + ' sample reducers home',
  );
  return {
    username: state.userData.userName,
    password: state.userData.Password,
    posts: state.post,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
