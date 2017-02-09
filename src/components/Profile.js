import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { textStyle } from './common/styles';
//import ActivityList from './ActivityList';
import Affiliation from './Affiliation';

class Profile extends Component {

  renderProfileImage() {

  }

  render() {
    const defaultProfileImageURL = require('./common/img/sarahpallittacrop.jpg');

    return (
      <View style={{ flex: 1, justifyContent: 'flex-start', alignSelf: 'stretch' }}>
        <Image
          source={defaultProfileImageURL}
          style={styles.imageStyle}
        />
        <View style={styles.containerStyle}>
          <Text style={textStyle}>Yasmin, 36</Text>
        </View>
        <Affiliation />
      </View>
    );
  }
}

//<ActivityList />


const styles = {
  imageStyle: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    width: null,
    flex: 3
  },
  containerStyle: {
    flex: 2
  }
};

export default Profile;
