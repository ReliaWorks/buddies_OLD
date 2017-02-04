import React, { Component } from 'react';
import { Image, ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
//import { containerStyle, textStyle } from './common/styles';
import { FullSizeImageModal } from './common';

const defaultProfileImageURL = require('./common/img/sarahpallittacrop.jpg');

const ggtcAffiliationImage = require('./common/img/ggtc_logo.png');
const rrcaAffiliationImage = require('./common/img/rrca_logo.png');

class UserEdit extends Component {
  state = { showModal: false, selectedImage: require('./common/img/ggtc_logo.png') };

  onModalClose() {
    this.setState({ showModal: false });
  }

  renderAffiliations() {
    return (
      <ScrollView
        style={{ flexDirection: 'row', flex: 1, alignSelf: 'stretch' }}
        horizontal
      >
        <TouchableOpacity
          onPress={() =>
            this.setState({
              showModal: !this.state.showModal,
              selectedImage: ggtcAffiliationImage
            })
          }
        >
          <View style={{ padding: 10 }}>
            <Image
              style={{ height: 75, width: 75 }}
              source={ggtcAffiliationImage}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.setState({
              showModal: !this.state.showModal,
              selectedImage: rrcaAffiliationImage
            })
          }
        >
          <View style={{ padding: 10 }}>
            <Image
              style={{ height: 75, width: 50, alignSelf: 'stretch' }}
              source={rrcaAffiliationImage}
            />
          </View>
        </TouchableOpacity>
        <FullSizeImageModal
          visible={this.state.showModal}
          imageURI={this.state.selectedImage}
          onClose={this.onModalClose.bind(this)}
        >
        test
        </FullSizeImageModal>
      </ScrollView>
    );
  }

  renderProfileImages() {
    return (
      <ScrollView
        style={{ flexDirection: 'row', flex: 3, alignSelf: 'stretch' }}
        horizontal
      >
        <TouchableOpacity onPress={() => { Actions.root(); }}>
          <View style={{ padding: 10 }}>
            <Image
              style={styles.imageStyle}
              source={defaultProfileImageURL}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { Actions.root(); }}>
          <View style={{ padding: 10 }}>
            <Image
              style={styles.imageStyle}
              source={defaultProfileImageURL}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { Actions.root(); }}>
          <View style={{ padding: 10 }}>
            <Image
              style={styles.imageStyle}
              source={defaultProfileImageURL}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        {this.renderProfileImages()}
        <View style={{ flex: 2, padding: 10 }}>
          <Text style={styles.textStyle}>Activities</Text>
        </View>
        <View style={{ flex: 1, padding: 10 }}>
          <Text style={styles.textStyle}>Affiliations</Text>
          {this.renderAffiliations()}
        </View>
      </View>
    );
  }
}

//<Text
//  style={styles.textStyle}
//  onPress={() => Actions.userView()}
//>
//  Click to go to User View Screen
//</Text>


const styles = {
  containerStyle: {
    flex: 1,
  },
  textStyle: {
    fontSize: 18,
    alignSelf: 'center'
  },
  imageStyle: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: 175,
    width: 175
  },
  descriptionContainerStyle: {
    backgroundColor: 'white',
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  }
};

export default UserEdit;
