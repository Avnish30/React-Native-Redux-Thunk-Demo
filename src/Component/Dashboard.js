import React from 'react';
import {Icon} from 'react-native-elements';
import CardWithHeading from './CardWithHeading';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
const image = {uri: 'https://reactjs.org/logo-og.png'};
const CardDataWithrating = [
  {
    image: 'https://source.unsplash.com/1600x900/?nature21',
    heading2: 'Ramblin` Man Fair',
    heading1: 'Spirit of Rock',
    rating: '9.5',
  },
  {
    image: 'https://source.unsplash.com/1600x900/?nature22',
    heading2: 'Ramblin` Man Fair',
    heading1: 'Spirit of Rock',
    rating: '9.5',
  },
  {
    image: 'https://source.unsplash.com/1600x900/?nature23',
    heading2: 'Ramblin` Man Fair',
    heading1: 'Spirit of Rock',
    rating: '9.5',
  },
  {
    image: 'https://source.unsplash.com/1600x900/?nature41',
    heading2: 'Ramblin` Man Fair',
    heading1: 'Spirit of Rock',
    rating: '9.5',
  },
  {
    image: 'https://source.unsplash.com/1600x900/?nature31',
    heading2: 'Ramblin` Man Fair',
    heading1: 'Spirit of Rock',
    rating: '9.5',
  },
  {
    image: 'https://source.unsplash.com/1600x900/?nature29',
    heading2: 'Ramblin` Man Fair',
    heading1: 'Spirit of Rock',
    rating: '9.5',
  },
];
const ListData = [
  {
    iconName: 'compass',
    Type: 'font-awesome-5',
    color: 'red',
    text: 'All',
  },
  {
    iconName: 'music',
    Type: 'font-awesome',
    color: '#88a4b3',
    text: 'Music',
  },
  {
    iconName: 'sports-soccer',
    Type: 'material',
    color: '#74c2ec',
    text: 'Sports',
  },
  {
    iconName: 'star-o',
    Type: 'font-awesome',
    color: '#bd73d8',
    text: 'Shows',
  },
  {iconName: 'disc', Type: 'feather', color: '#60ec5e', text: 'Discount'},
];
const CardData = [
  {
    month: 'Oct',
    date: '31',
    fulldate: 'Thu,oct,31 9:00AM',
    address: 'Tobacco Dock London',
    heading1: 'BBC Music',
    heading2: 'Introducing LIVE',
    image: 'https://source.unsplash.com/1600x900/?nightclub13',
  },
  {
    month: 'Oct',
    date: '31',
    fulldate: 'Thu,oct,31 9:00AM',
    address: 'Tobacco Dock London',
    heading1: 'BBC Music',
    heading2: 'Introducing LIVE',
    image: 'https://source.unsplash.com/1600x900/?nightclub12',
  },
  {
    month: 'Oct',
    date: '31',
    fulldate: 'Thu,oct,31 9:00AM',
    address: 'Tobacco Dock London',
    heading1: 'BBC Music',
    heading2: 'Introducing LIVE',
    image: 'https://source.unsplash.com/1600x900/?nightclub11',
  },
  {
    month: 'Oct',
    date: '31',
    fulldate: 'Thu,oct,31 9:00AM',
    address: 'Tobacco Dock London',
    heading1: 'BBC Music',
    heading2: 'Introducing LIVE',
    image: 'https://source.unsplash.com/1600x900/?nightclub130',
  },
  {
    month: 'Oct',
    date: '31',
    fulldate: 'Thu,oct,31 9:00AM',
    address: 'Tobacco Dock London',
    heading1: 'BBC Music',
    heading2: 'Introducing LIVE',
    image: 'https://source.unsplash.com/1600x900/?nightclub21',
  },
  {
    month: 'Oct',
    date: '31',
    fulldate: 'Thu,oct,31 9:00AM',
    address: 'Tobacco Dock London',
    heading1: 'BBC Music',
    heading2: 'Introducing LIVE',
    image: 'https://source.unsplash.com/1600x900/?nightclub111',
  },
];
const Dashboard = () => {
  const CardWithRating = ({image, heading1, heading2, rating}) => {
    return (
      <View style={{marginBottom: 20}}>
        <ImageBackground
          imageStyle={{borderTopLeftRadius: 6, borderTopRightRadius: 6}}
          source={{
            uri: image,
          }}
          style={styles.image}>
          <View
            style={{
              position: 'absolute',
              bottom: -15,
              flexDirection: 'column',
              width: '100%',
              height: '40%',
              // borderWidth: 1,
              // borderColor: 'grey',
            }}>
            <View
              style={{
                alignItems: 'flex-end',
                paddingRight: 5,
              }}>
              <Icon
                name="heart-o"
                size={18}
                type="font-awesome"
                color="white"
              />
            </View>
            <View style={{backgroundColor: 'white'}}>
              <Text style={{fontFamily: 'Roboto-Light', fontSize: 12}}>
                {heading1}
              </Text>
              <Text style={{fontFamily: 'Roboto-Black'}}>{heading2}</Text>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    backgroundColor: '#f74343',
                    paddingLeft: 5,
                    paddingRight: 5,
                    borderRadius: 3,
                  }}>
                  <Text style={{fontSize: 10, color: 'white'}}>{rating}</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };
  const ListCard = ({
    month,
    date,
    fulldate,
    address,
    heading1,
    heading2,
    image,
  }) => {
    return (
      <View style={{}}>
        <ImageBackground
          imageStyle={{borderTopLeftRadius: 6, borderTopRightRadius: 6}}
          source={{
            uri: image,
          }}
          style={styles.image}>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              flexDirection: 'row',
              backgroundColor: 'white',
              width: '100%',
              height: '40%',
              borderWidth: 1,
              borderColor: 'grey',
            }}>
            <View
              style={{
                flexDirection: 'column',
                flex: 1,
                alignItems: 'center',
              }}>
              <Text style={{fontFamily: 'Roboto-Bold', color: '#ff6363'}}>
                {month}
              </Text>
              <Text style={{fontFamily: 'Roboto-Bold', color: 'grey'}}>
                {date}
              </Text>
            </View>
            <View style={{flexDirection: 'column', flex: 4}}>
              <Text style={{fontFamily: 'Roboto-Bold'}}>{heading1}</Text>
              <Text style={{fontFamily: 'Roboto-Bold'}}>{heading2}</Text>
              <Text style={{fontFamily: 'Roboto-Light', fontSize: 10}}>
                {fulldate}
              </Text>
              <Text style={{fontFamily: 'Roboto-Light', fontSize: 10}}>
                {address}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };
  const ListItem = ({iconName, Type, color, text}) => {
    return (
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          // borderWidth: 1,
          // borderColor: 'red',
          margin: 10,
        }}>
        <Icon
          reverse
          name={iconName}
          type={Type}
          color={color}
          onPress={() => console.log('hello')}
          size={15}
          style={{paddingBottom: 0}}
        />
        <Text>{text}</Text>
      </View>
    );
  };
  return (
    <ScrollView style={{paddingBottom: 10, flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          marginBottom: 20,
        }}>
        <View
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 5,
            // backgroundColor: 'red',
          }}>
          <Text
            style={{
              // backgroundColor: 'red',
              textAlign: 'center',
              marginBottom: 10,
            }}>
            Events
          </Text>
          <TextInput placeholder="Search" style={styles.input}></TextInput>
        </View>

        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={ListData}
            renderItem={({item}) => ListItem(item)}></FlatList>
        </View>
        <View style={{paddingLeft: 20, fontSize: 20, flexDirection: 'column'}}>
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'Roboto-Medium',
              marginBottom: 15,
            }}>
            Up Comming Events
          </Text>
          <View style={{paddingRight: 5}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{width: 16}} />}
              horizontal
              data={CardData}
              renderItem={({item}) => ListCard(item)}></FlatList>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            paddingLeft: 20,
            fontSize: 20,
            flexDirection: 'column',
          }}>
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'Roboto-Medium',
              marginBottom: 15,
            }}>
            Recommend For You
          </Text>

          <View style={{paddingRight: 5}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{width: 16}} />}
              horizontal
              data={CardDataWithrating}
              renderItem={({item}) => CardWithRating(item)}></FlatList>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
    fontSize: 15,
    height: 40,
    padding: 0,
    paddingLeft: 5,
    marginBottom: 5,
    marginTop: 2,
  },
  image: {
    width: 170,
    height: 170,
    padding: 0,
  },
});
export default Dashboard;
