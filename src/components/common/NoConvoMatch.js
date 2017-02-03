import React from 'react';
import { Image, View } from 'react-native';

const NoConvoMatch = (props) => (
    <View>
      <Image
        style={styles.noConvoThumbnailStyle}
        source={{ uri: props.picture.large }}
      />
    </View>
);

const styles = {
  noConvoThumbnailStyle: {
    height: 75,
    width: 75,
    marginRight: 10
  },
};

export { NoConvoMatch };
