import React from 'react'; 
import { createStackNavigator } from 'react-navigation';

import Menu from './components/Menu';
import Detail from './components/Detail';
import Carrello from './components/Carrello';
import Filter from './components/Filter';


const App = createStackNavigator(
  {
    Menu: Menu,
    Detail: Detail,
    Carrello: Carrello,
    Filter: Filter
  },
  {
    initialRouteName: 'Menu',
  }
);

export default App;