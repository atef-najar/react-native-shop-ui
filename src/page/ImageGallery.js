/**
* This is the Main file
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { View, Icon } from 'native-base';
import Gallery from 'react-native-image-gallery';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Text from '../component/Text';

export default class ImageGallery extends Component {
  constructor(props) {
      super(props);
      this.state = {
        images: []
      };
  }

  componentWillMount() {
    let imgs = [];
    this.props.images.map((img) => {
      imgs.push({source: {uri: img}})
    });
    this.setState({images: imgs});
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <Gallery
          initialPage={this.props.position ? this.props.position : 0}
          style={{flex: 1, backgroundColor: 'black'}}
          images={this.state.images}
        />
        <Icon name="ios-close" style={styles.icon} onPress={() => Actions.pop()} />
      </View>
    );
  }
}

const styles = {
  icon: {
    color: 'white',
    fontSize: 46,
    position: 'absolute',
    top: 15,
    left: 15,
    width: 40,
    height: 40
  }
};
