import { AntDesign, Feather } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet } from 'react-native';

import { CryptoCategories } from '../components/CryptoCategories';
import { HeaderScreen } from '../components/HeaderScreen';
import { Text, View } from '../components/Themed';
import { useGetMarketChanges } from '../hooks/useGetMarketChanges';
import { MarketChangeItem } from '../components/MarketChangeItem';
import { showFeatureInProgress } from '../utils/toast';
import { AVAILABLE_CRYPTO_FILTERS, FilterCrypto } from '../constants/Filter';

export default function TabDiscoverScreen() {
  const [, setSortBy] = useState();
  const marketChanges = useGetMarketChanges();
  return (
    <View style={styles.container}>
      <HeaderScreen
        title="Market"
        headerAction={
          <>
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
              onPress={showFeatureInProgress}
            >
              <AntDesign
                name="staro"
                size={24}
                color="black"
                style={styles.headerActionItem}
              />
            </Pressable>
            <Pressable
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
              onPress={showFeatureInProgress}
            >
              <Feather name="search" size={24} color="black" />
            </Pressable>
          </>
        }
      />
      <CryptoCategories />
      <View style={styles.filter}>
        <Text style={styles.filterText}>Sort by</Text>
        <SelectDropdown
          data={AVAILABLE_CRYPTO_FILTERS}
          renderCustomizedButtonChild={(selectedItem) => {
            return (
              <View style={styles.filterDropdown}>
                <Text style={styles.filterDropdownText}>{selectedItem}</Text>
                <AntDesign name="down" size={12} color="black" />
              </View>
            );
          }}
          defaultValue={FilterCrypto.DEFAULT}
          buttonStyle={styles.filterButton}
          onSelect={(selectedItem) => {
            setSortBy(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem) => {
            return selectedItem;
          }}
          rowTextForSelection={(item) => {
            return item;
          }}
        />
      </View>
      <View style={styles.content}>
        <FlatList
          data={marketChanges}
          renderItem={({ item }) => (
            <MarketChangeItem
              name={item.name ?? ''}
              code={item.currencySymbol ?? ''}
              imageURI={
                item.logo ??
                'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/ruby.svg'
              }
              backgroundColor={item.color ?? '#000'}
              price={parseInt(item.latestPrice)}
              priceChanges={item.day ? parseFloat(item.day) : 0}
            />
          )}
          keyExtractor={(item, idx) => item.name ?? idx.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerActionItem: {
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  filterText: {
    fontWeight: 'bold',
  },
  filterButton: {
    backgroundColor: 'white',
    padding: 0,
  },
  filterDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  filterDropdownText: {
    marginRight: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
