import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import StackNav from './src/Navigation/Stacknav';

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    );
  }
}

export default App;
