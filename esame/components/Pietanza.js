import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default class Pietanza extends React.Component {
  
  _goToDetail = () => {
    this.props.navigation.navigate('Detail', {pietanza: this.props.data})    
  }
  
  render() {
    return(
      <TouchableOpacity style={styles.container} onPress={this._goToDetail}>
        <View style={{flex: 1}}>
          <Text style={styles.name}>{this.props.data.name}</Text>
          <Text style={styles.text}>€ {this.props.data.price}</Text>
          <Text style={styles.text}>{this.props.data.info}</Text>
        </View>
        <View>
          <Image style={styles.image} source={{uri: this.props.data.image}}/>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
    padding: 10,
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: 'papayawhip'
  },
  image: {
    width: 150,
    height: 150,
  },
  name: {
    color: 'indianred',
    fontSize: 26,
    fontWeight: 'bold'
  },
  text: {
    color: 'grey',
    fontSize: 18,
  }
})