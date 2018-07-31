import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header, CryptoContainer} from './src/components';
import {Provider} from 'react-redux';
import Store from './src/Store';

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  header:{
    flex:1,
  },
  cryptoView:{
    flex: 15
  }
})

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          <Header style={styles.header}/>
          <CryptoContainer style={styles.cryptoView}/>
        </View>
      </Provider>
    );
  }
}
