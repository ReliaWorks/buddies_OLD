import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardItem } from './common';

class Activity extends Component {
  onRowPress() {
    Actions.userEdit({ activity: this.props.activity });
  }

  render() {
    const { name } = this.props.activity;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
        <CardItem>
          <Text style={styles.titleStyle}>
            {name}
          </Text>
        </CardItem>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default Activity;
