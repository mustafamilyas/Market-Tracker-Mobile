import { AntDesign } from "@expo/vector-icons";
import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SvgUri } from "react-native-svg";
import { formatCurrency } from "../utils/currency";
import { BlinkColorText } from "./BlinkColorText";

interface Props {
  imageURI: string;
  backgroundColor: string;
  name: string;
  code: string;
  price: number;
  priceChanges: number;
}

export const MarketChangeItem: FC<Props> = ({
  imageURI,
  backgroundColor,
  name,
  code,
  price,
  priceChanges,
}) => {
  const priceChangesIndicator =
    priceChanges < 0 ? (
      <AntDesign name="caretdown" size={24} color="red" />
    ) : priceChanges > 0 ? (
      <AntDesign name="caretup" size={24} color="green" />
    ) : null;
  const priceChangesColor =
    priceChanges < 0 ? "red" : priceChanges > 0 ? "green" : "black";

  return (
    <View style={styles.container}>
      <View style={styles.contentLeft}>
        {imageURI ? (
          <SvgUri
            width="30"
            height="30"
            uri={imageURI}
            style={[
              styles.logo,
              backgroundColor ? ({ color: backgroundColor } as any) : undefined,
            ]}
          />
        ) : (
          imageURI
        )}
        <View style={styles.description}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.code}>{code}</Text>
        </View>
      </View>
      <View style={styles.contentRight}>
        <BlinkColorText
          style={styles.price}
          color={priceChangesColor}
          key={price}
        >
          {formatCurrency(price)}
        </BlinkColorText>
        <View style={styles.priceChanges}>
          {priceChangesIndicator}
          <Text style={[styles.priceChangesText, { color: priceChangesColor }]}>
            {priceChanges}%
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: "rgba(0,0,0,0.1)",
    marginHorizontal: 5,
    borderBottomWidth: 1,
  },
  contentLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  description: {},
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  code: {
    fontSize: 16,
  },
  contentRight: {
    alignItems: "flex-end",
  },
  price: {
    fontWeight: "bold",
    fontSize: 16,
  },
  priceChanges: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceChangesText: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: "bold",
  },
});
