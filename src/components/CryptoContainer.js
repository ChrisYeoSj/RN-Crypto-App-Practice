import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView} from 'react-native';
import CoinCard from './CoinCard';
import FetchCoinData from '../../Actions/FetchCoinData';

import Spinner from 'react-native-loading-spinner-overlay';

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom:100,
    paddingTop: 55,
  }
})

class CryptoContainer extends Component{

  componentWillMount(){
    this.props.FetchCoinData();
  }

  _renderCoinCards(){
    const {crypto} = this.props;
    return crypto.data.map((coin, index) => {
      <CoinCard
        key={index}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.price_usd}
        percent_change_24h={coin.percent_change_24h}
        percent_change_7d={coin.percent_change_7d}
    })
  }

  render(){
    const {crypto} = this.props;

    if(crypto.isFetching){
      return (<View>
                  <Spinner
                      visible={crpyto.isFetching}
                      textContent={'Loading..'}
                      textStyle={{color: '#253145'}}
                      animation='fade'
                  />
              </View>
            )
    }

    return (
      <ScrollView contentContainerStyle={contentContainer}>
          {_renderCoinCards()}
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
