import React, { Component } from 'react';
import { Image, ListView, Text, View } from 'react-native';
import { containerStyle, convoThumbnailStyle, textStyle } from './common/styles/Styles';
import { Conversation } from './common';
import sampleData from './demo-data/demoData.js';

const profileImage = require('./common/img/runningbuddy.png');

class Matches extends Component {
  constructor() {
    super();

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(sampleData),
    };
  }

  render() {
    return (
      <View style={containerStyle}>
        <View
          style={{
            flex: 1,
            padding: 10,
            alignSelf: 'flex-start'
          }}
        >
          <Text style={textStyle}>Matches</Text>
          <View style={styles.thumbnailContainerStyle}>
            <Image
              style={styles.noConvoThumbnailStyle}
              source={profileImage}
            />
            <Image
              style={styles.noConvoThumbnailStyle}
              source={profileImage}
            />
            <Image
              style={styles.noConvoThumbnailStyle}
              source={profileImage}
            />
            <Image
              style={styles.noConvoThumbnailStyle}
              source={profileImage}
            />
          </View>
        </View>
        <View
          style={{
            flex: 4,
            padding: 10,
            alignSelf: 'flex-start'
          }}
        >
          <Text style={textStyle}>Conversations</Text>
          <ListView
            style={styles.container}
            dataSource={this.state.dataSource}
            renderRow={(data) => <Conversation {...data} />

            }
          />
        </View>
      </View>
    );
  }
}

//{this.renderConversation()}
//{this.renderConversation()}
//{this.renderConversation()}
//{this.renderConversation()}


const styles = {
  container: {
    flex: 1,
    marginTop: 10,
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18,

  },
  noConvoThumbnailStyle: {
    height: 75,
    width: 75,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  thumbnailContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export default Matches;
