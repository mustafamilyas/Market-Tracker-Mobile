import { AntDesign, Feather } from '@expo/vector-icons'; 
import SelectDropdown from 'react-native-select-dropdown'
import { useState } from 'react';
import { Image, StyleSheet } from 'react-native';

import { CryptoCategories } from '../components/CryptoCategories';
import { HeaderScreen } from '../components/HeaderScreen';

import { Text, View } from '../components/Themed';
import { useGetSupportedCurrenciesQuery } from '../hooks/useGetSupportedCurrenciesQuery';

export default function TabDiscoverScreen() {
  const [sortBy, setSortBy] = useState();
  const currencies = useGetSupportedCurrenciesQuery();
  console.log('currencies', currencies)
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
          renderCustomizedButtonChild={(selectedItem, defaultTextContainer) => {
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
      <View style={styles.content}><Text>test</Text></View>
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
