import React from 'react';
import { Image, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { containerStyle, textStyle } from './common/styles/Styles';
//import BuddyCard from './BuddyCard';
//import Card from './common/Card';
//import CardItem from './common/CardItem';

const defaultProfileImageURL = require('./common/img/sarahpallittacrop.jpg');

const UserView = () => {
  return (
    <View style={containerStyle}>
      <Image
          source={defaultProfileImageURL}
          style={styles.imageStyle}
      />
      <Text
        style={textStyle}
        onPress={() => Actions.userEdit()}
      >
        Edit Profile
      </Text>
      <Text
        style={textStyle}
        onPress={() => Actions.settings()}
      >
        Account Settings
      </Text>
    </View>
  );
};

const styles = {
  imageStyle: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: 350,
    width: null
  },
  descriptionContainerStyle: {
    backgroundColor: 'white',
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  }
};


export default UserView;
