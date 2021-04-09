import React, {useEffect} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {GetDataPost} from '../Action/action';
import {Avatar, Badge, withBadge} from 'react-native-elements';
const posts = props => {
  // const content = props.posts.map(post => <Text>{post.title}</Text>);
  useEffect(() => {
    console.log(props);
    props.getDataPost();
  }, []);
  return (
    <View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          height: 40,
          backgroundColor: '#43f7d5',
        }}>
        <Icon
          style={{position: 'absolute', left: 10}}
          name="menu"
          onPress={() => {
            props.navigation.openDrawer();
          }}
          size={30}
          color="black"
        />
        <Text
          style={{
            fontWeight: 'bold',
            padding: 5,
            borderWidth: 2,
            borderColor: 'white',
          }}>
          POSTS
        </Text>
        <View style={{position: 'absolute', right: 10}}>
          <Avatar
            rounded
            source={{
              uri: 'https://randomuser.me/api/portraits/men/41.jpg',
            }}
            size="small"
          />
        </View>
      </View>
      <ScrollView>
        {props.posts.map((post, i) => (
          <View style={{margin: 20}}>
            <Image
              style={{
                width: '100%',
                height: 200,
                borderRadius: 15,
                resizeMode: 'cover',
              }}
              source={{
                uri: 'https://source.unsplash.com/1600x900/?nature' + i,
              }}></Image>

            <Text style={{paddingLeft: 5}}>{post.body}</Text>
          </View>
        ))}
        {/* {props.posts.map(post => (
          <Text>{post.id}</Text>
        ))} */}
      </ScrollView>
    </View>
  );
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
export default connect(mapStateToProps, mapDispatchToProps)(posts);
