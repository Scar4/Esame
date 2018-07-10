import React from 'react';
import { View, Text, FlatList, TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native';

import Ordine from './Ordine';

export default class Carrello extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Carrello',
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
    list: [],
    prezzoTotale: 0
  }

  async componentWillMount() {
    let newList = [];
    let newPrice = 0;
    await AsyncStorage.getItem('ordini').then(response => newList = JSON.parse(response) || [] )
    await AsyncStorage.getItem('prezzoTotale').then(response => newPrice = JSON.parse(response) || 0 )

    const pietanza = this.props.navigation.getParam('pietanza');
    if(pietanza) {
      newList.push(pietanza);
      newPrice += pietanza.prezzoTotale;
      AsyncStorage.setItem('ordini', JSON.stringify(newList));
      AsyncStorage.setItem('prezzoTotale', JSON.stringify(newPrice));
    }
    this.setState({list: newList});
    this.setState({prezzoTotale: newPrice});
  }  
  
  _del = item => {
    let newList = this.state.list.filter(currentPietanza => currentPietanza != item);
    let newPrice = 0;
    newList.map(item => newPrice += item.prezzoTotale)
    this.setState({ list: newList });
    this.setState({ prezzoTotale: newPrice });
    AsyncStorage.setItem('ordini', JSON.stringify(newList));
    AsyncStorage.setItem('prezzoTotale', JSON.stringify(newPrice));
  }

 _renderItem = ({item}) => (
   <Ordine data={item} del={() => this._del(item)}/>
 )
 
 _keyExtractor = (item, index) => String(index)

  render() {
    return(
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View>
          <FlatList
            data={this.state.list}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          />   
        </View>  
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.text}>Prezzo totale: </Text>
          <Text style={styles.text}>€ {this.state.prezzoTotale}</Text>
        </View> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    margin: 5,
    color: 'black',
    fontSize: 24,
  }
})