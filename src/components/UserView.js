import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { containerStyle, textStyle } from './common/styles/Styles';
import Profile from './Profile';
//import Card from './common/Card';
//import CardItem from './common/CardItem';

const UserView = () => {
  return (
    <View style={containerStyle}>
      <Profile />
      <Text style={textStyle} onPress={() => Actions.userEdit()}>
        Edit Profile
      </Text>
    </View>
  );
};

export default UserView;
