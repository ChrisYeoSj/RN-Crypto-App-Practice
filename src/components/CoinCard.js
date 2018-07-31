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
    justifyContent: 'space-between',
  },
  lowerTier:{
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  red:{
    color:'#ff0000',
  },
  blue:{
    color: '#0000ff',
  },
  imageContainer:{
    flex: 1,
    paddingLeft:10,
  },
  symbolContainer:{
    flex: 2
  },
  priceContainer:{
    flex: 2
  },
  day:{
    flex:1,
    textAlign: 'center',
  },
  week:{
    flex:1,
    textAlign: 'center',
  }
})

const {container, image, bold, divider, upperTier, imageContainer, lowerTier, red, blue, priceContainer, symbolContainer, day, week} = styles;

const CoinCard = ({symbol, coin_name, price_usd, percent_change_24h, percent_change_7d}) => {

  return (
    <View style={container}>
      <View style={divider}></View>
      <View style={upperTier}>
        <View style={imageContainer}>
          <Image
            style={image}
            source={{uri:coinImages[symbol]}}
          />
        </View>
        <View style={symbolContainer}>
          <Text><Text style={bold}>{symbol}</Text> | {coin_name}</Text>
        </View>
        <View style={priceContainer}>
          <Text><Text style={bold}>$</Text>{price_usd}</Text>
        </View>
      </View>
      <View style={lowerTier}>
        <Text style={day}>24h: <Text style={[percent_change_24h < 0 ? red:blue]}>{percent_change_24h}</Text></Text>
        <Text style={week}>7d: <Text style={[percent_change_7d < 0 ? red:blue]}>{percent_change_7d}</Text></Text>
      </View>
      <View style={divider}></View>
    </View>
  );
}

export default CoinCard;
