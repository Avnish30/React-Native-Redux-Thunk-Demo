import React from 'react';
import {CardDataWithrating, ListData, CardData} from '../config';
import CardWithHeading from './CardWithHeading';
import CardWithRating from './CardWithRating';
import IconHorizontalList from './IconHorizontalList';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';

const Dashboard = () => {
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
            renderItem={({item}) => IconHorizontalList(item)}></FlatList>
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
              renderItem={({item}) => CardWithHeading(item)}></FlatList>
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
