import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderScreenProps {
  title: string;
  headerAction?: React.ReactNode;
}

export const HeaderScreen: FC<HeaderScreenProps> = ({
  title,
  headerAction,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {headerAction ? <View style={styles.action}>{headerAction}</View> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  action: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
