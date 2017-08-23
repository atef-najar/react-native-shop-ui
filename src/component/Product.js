/**
* This is the Product component
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Image } from 'react-native';
import { View, Col, Card, CardItem, Body, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Colors from '../Colors';
import Text from './Text';

export default class product extends Component {
  render() {
    return(
      <Col style={this.props.isRight ? style.leftMargin : style.rightMargin}>
        <Card transparent>
            <CardItem cardBody>
              <Button transparent style={style.button} onPress={() => this.pressed()}>
                <Image source={{uri: this.props.product.image}} style={style.image}/>
                <View style={style.border} />
              </Button>
            </CardItem>
            <CardItem style={{paddingTop: 0}}>
            <Button style={{flex: 1, paddingLeft: 0, paddingRight: 0, paddingBottom: 0, paddingTop: 0}}
              transparent
              onPress={() => this.pressed()}
            >
                <Body>
                    <Text
                      style={{fontSize: 16}}
                      numberOfLines={1}
                    >{this.props.product.title}</Text>
                    <View style={{flex: 1, width: '100%', alignItems: 'center'}}>
                      <View style={style.line} />
                      <Text style={style.price}>{this.props.product.price}</Text>
                      <View style={style.line} />
                    </View>
                </Body>
              </Button>
            </CardItem>
          </Card>
      </Col>
    );
  }

  pressed() {
    Actions.product({product: this.props.product});
  }
}

const style = {
  button: {flex: 1, height: 250, paddingLeft: 4, paddingRight: 4},
  image: {height: 250, width: null, flex: 1},
  leftMargin: {
    marginLeft: 7,
    marginRight: 0,
    marginBottom: 7
  },
  rightMargin: {
    marginLeft: 0,
    marginRight: 7,
    marginBottom: 7
  },
  border: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(253, 253, 253, 0.2)'
  },
  price: {
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 5,
    zIndex: 1000,
    backgroundColor: '#fdfdfd'
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#7f8c8d',
    position: 'absolute',
    top: '52%'
  }
}
