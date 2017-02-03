import React, { Component } from 'react';
import { Image, ListView, Text, View } from 'react-native';
import { containerStyle, textStyle } from './common/styles/Styles';
import { Conversation, NoConvoMatch } from './common';
import sampleData from './demo-data/demoData';
import matchesSampleData from './demo-data/matchesSampleData';

class Matches extends Component {
  constructor() {
    super();

    const conversationsDS = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const matchesDS = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: conversationsDS.cloneWithRows(sampleData),
      matchesDataSource: matchesDS.cloneWithRows(matchesSampleData),
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
          <ListView
            style={styles.thumbnailContainerStyle}
            dataSource={this.state.matchesDataSource}
            renderRow={(matchData) => <NoConvoMatch {...matchData} />}
            horizontal
          />
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
            renderRow={(data) => <Conversation {...data} />}
          />
        </View>
      </View>
    );
  }
}
/*
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
/>*/

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
    flex: 1,
    marginRight: 10,
    flexDirection: 'row',
  }
};

export default Matches;
