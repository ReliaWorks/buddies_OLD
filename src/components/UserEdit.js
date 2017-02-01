import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { containerStyle, textStyle } from './common/styles/Styles';

const UserEdit = () => {
    return (
      <View style={containerStyle}>
        <Text
          style={textStyle}
          onPress={() => Actions.userView()}
        >
          User Edit Screen
        </Text>
      </View>
    );
};

export default UserEdit;
