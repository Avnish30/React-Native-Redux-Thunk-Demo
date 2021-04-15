import React from 'react';
import {Icon} from 'react-native-elements';

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

const CardWithHeading = ({
  month,
  date,
  fulldate,
  address,
  heading1,
  heading2,
  image,
}) => {
  return (
    <View>
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
const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 170,
    padding: 0,
  },
});
export default CardWithHeading;
