/**
* This is the Checkout Page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Container, Content, Left, Right, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Colors from '../Colors';
import Text from '../component/Text';
import Navbar from '../component/Navbar';

export default class Checkout extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }


  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => Actions.pop()} transparent>
          <Icon name='ios-arrow-back' />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{flex:1}}>
        <Button onPress={() => Actions.search()} transparent>
          <Icon name='ios-search-outline' />
        </Button>
      </Right>
    );
    return(
      <Container style={{backgroundColor: '#fdfdfd'}}>
        <Navbar left={left} right={right} title="CHECKOUT" />
        <Content>
          <Text>Checkout</Text>
        </Content>
      </Container>
    );
  }

  signup() {
    alert("Checkout"):
  }


}
