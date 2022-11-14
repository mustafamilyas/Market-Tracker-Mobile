import { AntDesign, Feather } from '@expo/vector-icons'; 
import SelectDropdown from 'react-native-select-dropdown'
import { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { CryptoCategories } from '../components/CryptoCategories';
import { HeaderScreen } from '../components/HeaderScreen';

import { Text, View } from '../components/Themed';
import { useGetMarketChanges } from '../hooks/useGetMarketChanges';
import { MarketChangeItem } from '../components/MarketChangeItem';

export default function TabDiscoverScreen() {
  const [sortBy, setSortBy] = useState();
  const marketChanges = useGetMarketChanges();
  return (
    <View style={styles.container}>
      <HeaderScreen
        title="Market"
        headerAction={
          <>
            <AntDesign name="staro" size={24} color="black" style={styles.headerActionItem} />
            <Feather name="search" size={24} color="black" />
          </>
        }
      />
      <CryptoCategories />
      <View style={styles.filter}>
        <Text style={styles.filterText}>Sort by</Text>
        <SelectDropdown
          data={['test', 'test2']}
          renderCustomizedButtonChild={(selectedItem) => {
            return (
              <View style={styles.filterDropdown}>
                <Text style={styles.filterDropdownText}>{selectedItem || 'All'}</Text>
                <AntDesign name="down" size={12} color="black" />
              </View>
            );
          }}
          buttonStyle={styles.filterButton}
          onSelect={(selectedItem, index) => {
            setSortBy(selectedItem)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
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
              image={item.logo ?? "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/ruby.svg"} 
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
    flex: 1
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
    padding: 0
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
  }
});
