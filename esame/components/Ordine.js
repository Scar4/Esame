import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default class Ordine extends React.Component {
  render() {
    return(
      <TouchableOpacity style={styles.conteiner} onLongPress={() => this.props.del()}>
        <Text style={styles.quantita}>{this.props.data.quantita}x</Text>
        <Text style={styles.name}>{this.props.data.name}</Text>
        <Text style={styles.prezzo}>€ {this.props.data.prezzoTotale}</Text>
      </TouchableOpacity>
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
  quantita: {
    fontSize: 30,
    color: 'dodgerblue',
    marginLeft: 0
  },
  name: {
    fontSize: 30,
    color: 'black',
    marginLeft: 0
  },
  prezzo: {
    fontSize: 30,
    color: 'grey',
    marginLeft: 0
  },
})