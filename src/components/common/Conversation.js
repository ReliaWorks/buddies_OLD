import React from 'react';
import { Image, Text, View } from 'react-native';
import { convoThumbnailStyle, textStyle } from './styles';

const profileImage = require('./img/runningbuddy.png');

const Conversation = (props) => (
    <View style={styles.container}>
      <Image
        style={convoThumbnailStyle}
        source={profileImage}
      />
      <Text style={textStyle}>
        {`${props.name.first} ${props.name.last}`}
      </Text>
    </View>
);

const styles = {
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  }
};

export { Conversation };
