import { AntDesign, Feather } from '@expo/vector-icons'; 
import { Image, StyleSheet } from 'react-native';
import { CryptoCategories } from '../components/CryptoCategories';
import { HeaderScreen } from '../components/HeaderScreen';

import { Text, View } from '../components/Themed';

export default function TabDiscoverScreen() {
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
      <View style={styles.content}><Text>test</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  headerActionItem: {
    marginRight: 10,
  },
  content: {
    flex: 1
  }
});
