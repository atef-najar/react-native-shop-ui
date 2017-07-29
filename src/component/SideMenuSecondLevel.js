/**
* This is the SideMenuSecondLevel component used in the submenu
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { View, Button, ListItem, List, Body, Right, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Text from './Text';

export default class SideMenuSecondLevel extends Component {
  render() {
    return(
      <View>
        <View style={styles.header}>
          <Icon name='ios-arrow-back' style={{fontSize: 20, marginTop: 4}} onPress={() => this.props.back()} />
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{textAlign: 'center', fontSize: 20}}>{this.props.title}</Text>
          </View>
        </View>
        <View style={{paddingRight: 15}}>
          <List>
            {this.renderMenuItems()}
          </List>
        </View>
      </View>
    );
  }

  renderMenuItems() {
    let items = [];
    this.props.menu.map((item, i) => {
      items.push(
        <ListItem
          last={this.props.menu.length === i+1}
          icon
          key={item.id}
          button={true}
          onPress={() => this.itemClicked(item)}
        >
          <Body>
            <Text>{item.title}</Text>
          </Body>
          <Right>
            <Icon name="ios-arrow-forward" />
          </Right>
        </ListItem>
      );
    });
    return items;
  }

  itemClicked(item) {
    Actions.category({id: item.id, title: item.title});
  }

}

const styles={
  header: {
    flex: 1,
    flexDirection: 'row',
    padding: 15
  }
};
