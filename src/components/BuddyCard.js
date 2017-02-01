import React from 'react';
import { Text, Image, View } from 'react-native';
import { Card, CardItem } from './common';

const defaultProfileImageURL = require('./common/img/sarahpallittacrop.jpg');

const BuddyCard = (props) => {
  const { firstName, age, activities } = props.value;
  const { containerStyle, imageStyle, textStyle, descriptionContainerStyle } = styles;

  return (
      <Card>
        <CardItem>
          <View style={containerStyle}>
            <Image
              source={defaultProfileImageURL}
              style={imageStyle}
            />
          </View>
          <View style={descriptionContainerStyle}>
            <View>
              <Text style={textStyle}>{firstName}, {age}</Text>
              <Text style={textStyle}>{activities}</Text>
            </View>
          </View>
        </CardItem>
      </Card>
  );
};

const styles = {
  containerStyle: {
    flex: 5,
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 18,
  },
  imageStyle: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: 580,
    width: null
  },
  descriptionContainerStyle: {
    backgroundColor: 'white',
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  }
};

export default BuddyCard;
