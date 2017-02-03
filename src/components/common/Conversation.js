import React from 'react';
import { Image, Text, View } from 'react-native';
import { convoThumbnailStyle, textStyle } from './styles';

const profileImage = require('./img/runningbuddy.png');

const Conversation = (props) => (
    <View style={styles.container}>
      <Image
        style={convoThumbnailStyle}
        source={{ uri: props.picture.large }}
      />
      <View style={styles.convoContainerStyle}>
        <Text style={textStyle}>
          {`${props.name.first} ${props.name.last}`}
        </Text>
      </View>
    </View>
);

const styles = {
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  convoContainerStyle: {
    flexDirection: 'row',
//    backgroundColor: 'purple',
//    borderWidth: 1,
//    borderRadius: 2,
//    borderColor: '#ddd',
//    borderBottomWidth: 0,
//    shadowColor: '#000',
//    shadowOffset: { width: 0, height: 2 },
//    shadowOpacity: 0.1,
//    shadowRadius: 2,
//    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 1,
    alignItems: 'stretch',
  },
};

export { Conversation };
