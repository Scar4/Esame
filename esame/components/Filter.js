import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import Ingrediente from './Ingrediente';

export default class Filter extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Filter',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'dodgerblue',
      },
      headerTitleStyle: {
        fontSize: 38,
      },
    };
  }  

  state = {
    list: []
  }
  
  componentDidMount() {
    
  }

  _renderItem = ({item}) => (
   <Ingrediente data={item}/>
 )
 
 _keyExtractor = (item, index) => String(index)

  render() {
    return(
      <View style={styles.conteiner}>
        <FlatList
          data={this.state.list}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    margin: 5
  },
})