import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';

import Pietanza from './Pietanza';

export default class Menu extends React.Component {
   static navigationOptions = ({ navigation }) => {
    return {
      title: 'Menu',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'dodgerblue',
      },
      headerTitleStyle: {
        fontSize: 38,
      },
      headerLeft: (
        <View style={{marginLeft: 10}}>
          <Icon name='filter' type='font-awesome' color='white' size={32} onPress={() => navigation.navigate('Filter')}/>
        </View>
      ),
      headerRight: (
        <View style={{marginRight: 10}}>
          <Icon name='shopping-cart' type='font-awesome' color='white' size={32} onPress={() => navigation.navigate('Carrello')}/>
        </View>
      ),
    };
  };
  
  state = {
    list: [],
    tmpList: [],
  }

  componentWillMount() {
    this.loadData();
  }

  async loadData() {
    let res = await fetch(`http://www.dmi.unict.it/~calanducci/LAP2/food.json`);
    let resJSON = await res.json();
    this.setState({list: resJSON.data})
  }

 _renderItem = ({item}) => (
   <Pietanza data={item} navigation={this.props.navigation}/>
 )
 
 _keyExtractor = (item, index) => String(index)

_filter(text) {
  if(text == '') {
    this.loadData();
    return
  }
  let newList = this.state.list;
  newList = newList.filter((item) => item.name.toString().toUpperCase().includes(text.toUpperCase()))
  this.setState({list: newList})
}

  render() {
    return(
      <View style={styles.container}>
        <View>
          <SearchBar
            round
            clearIcon={{ color: 'grey' }}
            searchIcon={{ size: 24 }}
            onChangeText={text => this._filter(text)}
            placeholder='Type Here...' />
        </View>
        <View>
          <FlatList
            data={this.state.list}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})