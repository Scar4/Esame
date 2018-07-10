import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class Ingrediente extends React.Component {
  render() {
    return(
      <View>
        <CheckBox
          title={this.props.data.name}
          checked={this.props.data.checked}
        />
      </View>
    )
  }
}