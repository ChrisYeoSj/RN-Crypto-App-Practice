import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet, FlatList} from 'react-native';
import CoinCard from './CoinCard';
import FetchCoinData from '../Actions/FetchCoinData';

import Spinner from 'react-native-loading-spinner-overlay';

const styles = StyleSheet.create({
  contentContainer: {
    display: 'flex',
    flex: 1,
  }
})

const {contentContainer} = styles;

class CryptoContainer extends Component{

  componentWillMount(){
    this.props.FetchCoinData();
  }

  _renderCoinCards(){
    const {crypto} = this.props;
    return (
      <FlatList
          data={crypto.data}
          renderItem={(coin)=>{
            console.log(coin.item)
            return (<CoinCard
              coin_name={coin.item.name}
              symbol={coin.item.symbol}
              price_usd={coin.item.price_usd}
              percent_change_24h={coin.item.percent_change_24h}
              percent_change_7d={coin.item.percent_change_7d}
            />)
          }}
          keyExtractor={(item, index) => item.id}
      />
    )
  }

  render(){
    const {crypto} = this.props;

    if(crypto.isFetching){
      return (<View>
                  <Spinner
                      visible={crypto.isFetching}
                      textContent={'Loading..'}
                      textStyle={{color: '#253145'}}
                      animation='fade'
                  />
              </View>
            )
    }

    return (
      <ScrollView contentContainerStyle={contentContainer}>
          {this._renderCoinCards()}
      </ScrollView>
    )
  }
}

function mapStateToProps(state){
  return {
    crypto: state.crypto,
  }
}
export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer);
