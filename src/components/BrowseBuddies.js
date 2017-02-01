import React, { Component } from 'react';
import { View } from 'react-native';
//import { Card, CardItem, Button } from './common';
import BuddyCard from './BuddyCard';

class BrowseBuddies extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <BuddyCard
          value={{
            firstName: 'Yasmin',
            age: '36',
            activities: 'Running, Tennis'
          }}
        />
    </View>
    );
  }
}

export default BrowseBuddies;
