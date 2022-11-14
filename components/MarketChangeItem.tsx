import React, {FC} from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import {SvgUri} from 'react-native-svg'
import { formatCurrency } from '../utils/currency';

interface Props {
  image: string;
  name: string;
  code: string;
  price: number;
  priceChanges: number;
}

export const MarketChangeItem: FC<Props> = ({ image, name, code, price, priceChanges }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentLeft}>
        {Boolean(image) ? <SvgUri
          width="30"
          height="30"
          uri={image}
          style={styles.logo}
        />: image}
        <View style={styles.description}>
          <Text style={styles.name}>{ name}</Text>
          <Text style={styles.code}>{ code}</Text>
        </View>
      </View>
      <View style={styles.contentRight}>
        <Text style={styles.price}>{formatCurrency(price)}</Text>
        <Text style={styles.priceChanges}>{ priceChanges}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: 'rgba(0,0,0,0.1)',
    marginHorizontal: 5,
    borderBottomWidth: 1,
  },
  contentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  description: {

  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  },
  code: {
    fontSize: 16
  },
  contentRight: {
    alignItems: 'flex-end',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  priceChanges: {
    fontSize: 16
  },
})
