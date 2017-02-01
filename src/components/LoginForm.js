import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
//import { connect } from 'react-redux';
import { LoginButton,
         AccessToken,
//         GraphRequest,
//         GraphRequestManager
       } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';
import { backgroundImage, loginButtonStyle, legalTextStyle } from './common/styles';
//import { loginUser } from '../actions';
//import { Card, CardItem, Button, Input, Spinner } from './common';

const backgroundImageURL = require('./common/img/WorkoutBuddiesImage.jpg');

class LoginForm extends Component {
  state = { email: '', first_name: '', last_name: '', error: '', loading: false, loggedIn: false };

  componentWillMount() {
    console.log(AccessToken);
    AccessToken.getCurrentAccessToken().then(
      (data) => {
        if (data) {
          //const { accessToken } = data;
          //this.initUser(accessToken);
          Actions.main();
        }
      }
    );
  }
/*
  initUser(token) {

    const profileRequestParams = {
      fields: {
        string: 'id, name, email, first_name, last_name, gender'
      }
    };

    const profileRequestConfig = {
      httpMethod: 'GET',
      version: 'v2.5',
      parameters: profileRequestParams,
      accessToken: token.toString()
    };

    const profileRequest = new GraphRequest(
      '/me',
      profileRequestConfig,
      responseCallback,
    );
    // Start the graph request.
    new GraphRequestManager().addRequest(profileRequest).start();
    console.log('After new GraphRequestManager');
    console.log(response.json.first_name);
    this.setState({ first_name: response.json.first_name, last_name: response.json.last_name });
    console.log(this);
    });
    this.setState({ name: req.name });
    this.setState({ email: req.email });
    fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
      .then((response) => response.json())
      .then((json) => {
      // Some user object has been set up somewhere, build that user here
      this.setState({ email: json.email });
      this.setState({ name: json.name });
      user.id = json.id
      user.user_friends = json.friends
      user.email = json.email
      user.username = json.name
      user.loading = false
      user.loggedIn = true
      user.avatar = setAvatar(json.id)
*/
  /*    })
      .catch(() => {
        reject('ERROR GETTING DATA FROM FACEBOOK')
      })
  }
*/

  renderLoginForm() {
    return (
      <View style={styles.container}>
        <Image source={backgroundImageURL} style={backgroundImage}>
          <View style={loginButtonStyle}>
            <LoginButton
              readPermissions={['user_about_me','user_photos','email']}
              onLoginFinished={
                (error, result) => {
                  if (error) {
                    alert(result.error);
                  } else if (result.isCancelled) {
                    alert('Login was cancelled');
                  } else {
                    //this.loginUser.bind(this);
                    this.loggedIn = true;
                    Actions.main();
                  }
                }
              }
              onLogoutFinished={() => alert('User logged out')}
            />
          </View>
        </Image>
        <View>
          <Text style={legalTextStyle}>Terms of Service</Text>
        </View>
      </View>
    );
  }


  render() {
    if (this.loggedIn) Actions.browse();
    else return this.renderLoginForm();
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  }
};

/*const mapStateToProps = ({ auth }) => {
  const { token } = auth;

  return { token };
};

export default connect(mapStateToProps, { loginUser })(LoginForm);*/
export default LoginForm;
