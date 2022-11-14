import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { CRYPTO_CATEGORIES } from "../constants/Crypto";

export const CryptoCategories = () => {
  return (
    <ScrollView horizontal style={styles.container}>
      {CRYPTO_CATEGORIES.map((category) => (
        <View style={styles.item} key={category.id}>
          <Text style={styles.itemText}>{category.title}</Text>
        </View>
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
    borderColor: "rgba(0,0,0,0.1)",
  },
  itemText: {
    fontSize: 15,
  },
});
