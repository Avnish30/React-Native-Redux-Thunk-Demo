import React from 'react';
import {Icon} from 'react-native-elements';
import {View, Text} from 'react-native';
const IconHorizontalList = ({iconName, Type, color, text}) => {
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

export default IconHorizontalList;
