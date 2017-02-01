import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LoginButton } from 'react-native-fbsdk';
import { legalTextStyle } from './common/styles';
//import Button from './common/Button';

//const backgroundImageURL = require('./common/img/WorkoutBuddiesImage.jpg');

class Settings extends Component {
//  <Button onPress={() => Actions.root()}> Delete Account</Button>

//  renderPDF() {
//    return <WebView source={{uri: 'termsofservice.pdf'}} />
//  }
  render() {
    return (
      <View style={styles.containerStyle}>
          <Text>Email</Text>
          <TextInput style={{ height: 30, borderColor: 'gray', borderWidth: 1 }} />
          <Text>Email Notifications</Text>
          <Text>Mobile Notifications</Text>
          <Text style={legalTextStyle}>Privacy Policy</Text>
          <Text style={legalTextStyle}>Terms of Service</Text>
          <Text>Contact Us</Text>
        <LoginButton
          onLogoutFinished={() => {
            console.log('In Settings, onLogoutFinished');
            Actions.login();
          }}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    margin: 10
  }
};

export default Settings;
