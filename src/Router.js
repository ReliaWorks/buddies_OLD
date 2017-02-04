import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Settings from './components/Settings';
import BrowseBuddies from './components/BrowseBuddies';
import UserEdit from './components/UserEdit';
import UserView from './components/UserView';
import Matches from './components/Matches';
import { Conversation } from './components/common';
import { buttonIconStyle, navigationBarStyle } from './components/common/styles';

const sprocketImageLocation = require('./components/common/img/224_gear.png');
const chatImageLocation = require('./components/common/img/224_chat.png');

const RouterComponent = () => {
  return (
    <Router sceneStyle={styles.routerStyle} navigationBarStyle={navigationBarStyle}>
      <Scene key="root">
        <Scene key="login" direction="vertical" component={LoginForm} title="Buddies" initial />
      </Scene>
      <Scene key="main">
        <Scene
          key="browse"
          component={BrowseBuddies}
          title="Buddies"
          leftButtonImage={sprocketImageLocation}
          rightButtonImage={chatImageLocation}
          leftButtonIconStyle={buttonIconStyle}
          onLeft={() => Actions.profileSettings()}
          rightButtonIconStyle={buttonIconStyle}
          onRight={() => Actions.matchesConversations()}
          initial
        />
      </Scene>
      <Scene key="profileSettings">
        <Scene
          key="userView"
          direction="vertical"
          component={UserView}
          title="Profile Settings"
          rightTitle="Home"
          rightButtonIconStyle={buttonIconStyle}
          onRight={() => Actions.main()}
          initial
        />
        <Scene key="userEdit" component={UserEdit} title="Edit Profile" />
        <Scene key="settings" component={Settings} title="Settings" />
      </Scene>
      <Scene key="matchesConversations">
        <Scene
          key="matches"
          component={Matches}
          title="Matches"
          leftTitle="Home"
          onLeft={() => Actions.main()}
        />
        <Scene
          key="conversation"
          component={Conversation}
          title="Conversation"
        />
      </Scene>
    </Router>
  );
};

const styles = {
  routerStyle: {
    paddingTop: 60,
//    backgroundColor: 'orange'
  },
};
export default RouterComponent;
