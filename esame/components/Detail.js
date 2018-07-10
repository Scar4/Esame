import React from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FormLabel, Button, Icon } from 'react-native-elements';

export default class Detail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Detail',
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
    name: '',
    image: '',
    price: '',
    info: '',
    ingredients: '',
    quantita: 0,
    prezzoTotale: 0
  }
  
  componentWillMount() {
    const pietanza = this.props.navigation.getParam('pietanza'); 
    this.setState({
      name: pietanza.name,
      price: pietanza.price,
      image: pietanza.image,
      info: pietanza.info,
      ingredients: pietanza.ingredients
    })
  }  
  
  _togli = () => {
    if(this.state.quantita > 0)  {
      this.setState({quantita: this.state.quantita - 1});
      this.setState({prezzoTotale: this.state.prezzoTotale - Number.parseFloat(this.state.price, 10)});
    }
  }

  _aggiungi = () => {
    this.setState({quantita: this.state.quantita + 1});
    this.setState({prezzoTotale: this.state.prezzoTotale + Number.parseFloat(this.state.price, 10)});
  }

  aggiungiAlCarrello = () => {
    if(this.state.quantita > 0) {
      let pietanza = {
        name: this.state.name,
        quantita: this.state.quantita,
        prezzoTotale: this.state.prezzoTotale
      }
      this.props.navigation.navigate('Carrello', {pietanza: pietanza}) 
    }
  }

  render() {
    return(
      <View style={{flex: 1, backgroundColor: 'papayawhip'}}>
        <ScrollView style={styles.container}>
          <View style={styles.container2}>
            <FormLabel labelStyle={styles.label}>{this.state.name}</FormLabel>
            <Text style={styles.text}>€ {this.state.price}</Text>
          </View>
          <Image style={styles.image} source={{uri: this.state.image}}/>
          <Text style={styles.text}>{this.state.info}</Text>
          <Text style={styles.text}>{this.state.ingredients}</Text>
        </ScrollView>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Icon name='minus-circle' type='font-awesome' color='dodgerblue' onPress={this._togli}/>
            <Text style={styles.text}>{this.state.quantita}</Text>
            <Icon name='plus-circle' type='font-awesome' color='dodgerblue' onPress={this._aggiungi}/>
          </View>
          <Text style={styles.text}>Prezzo totale: € {this.state.prezzoTotale}</Text>
          <Button 
            title='Aggiungi al carrello'
            buttonStyle={{
              margin: 5, 
              backgroundColor: 'dodgerblue',
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5}}
            textStyle={{fontSize: 30, fontWeight: 'bold'}}
            onPress={this.aggiungiAlCarrello}
          />          
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  container2: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    fontSize: 30,
    color: 'indianred',
    marginLeft: 0
  },
  text: {
    color: 'grey',
    fontSize: 20,
    marginTop: 10,
  },
  image: {
    width: 520,
    height: 400,
  },
})