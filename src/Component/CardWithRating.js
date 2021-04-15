import React from 'react';
import {Icon} from 'react-native-elements';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
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
            <Icon name="heart-o" size={18} type="font-awesome" color="white" />
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
const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 170,
    padding: 0,
  },
});
export default CardWithRating;
