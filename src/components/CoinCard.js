import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

import {coinImages} from '../Utils/CoinImages';

const styles=StyleSheet.create({
  container:{
    display:'flex',
    flex: 1,
    flexDirection: 'column',
  },
  image:{
    width: 40,
    height: 40,
  },
  bold:{
    fontWeight: 'bold',
  },
  divider:{
    height:1,
    width: Dimensions.get('window').width,
    backgroundColor:'#D3D3D3',
  },
  upperTier:{
    marginTop: 20,
    marginBottom: 10,
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  lowerTier:{
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  red:{
    color:'#ff0000',
  },
  blue:{
    color: '#0000ff',
  }
})

const {container, image, bold} = styles;

const CoinCard = ({symbol, coin_name, price_usd, percent_change_24h, percent_change_7d}) => {

  return (
    <View style={container}>
      <View style={styles.divider}></View>
      <View style={styles.upperTier}>
        <Image
          style={styles.image}
          source={{uri:coinImages[symbol]}}
        />
        <Text><Text style={bold}>{symbol}</Text> | {coin_name}</Text>
        <Text><Text style={bold}>$</Text>{price_usd}</Text>
      </View>
      <View style={styles.lowerTier}>
        <Text>24h: <Text style={[percent_change_24h < 0 ? styles.red:styles.blue]}>{percent_change_24h}</Text></Text>
        <Text>7d: <Text style={[percent_change_7d < 0 ? styles.red:styles.blue]}>{percent_change_7d}</Text></Text>
      </View>
      <View style={styles.divider}></View>
    </View>
  );
}

export default CoinCard;
