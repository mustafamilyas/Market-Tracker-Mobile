import React from 'react';
import { ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';
import { CRYPTO_CATEGORIES } from '../constants/Crypto';
import { showFeatureInProgress } from '../utils/toast';

export const CryptoCategories = () => {
  return (
    <ScrollView horizontal style={styles.container}>
      {CRYPTO_CATEGORIES.map((category) => (
        <Pressable
          onPress={showFeatureInProgress}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
          key={category.id}
        >
          <View style={styles.item}>
            <Text style={styles.itemText}>{category.title}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexGrow: 0,
  },
  item: {
    marginRight: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  itemText: {
    fontSize: 15,
  },
});
