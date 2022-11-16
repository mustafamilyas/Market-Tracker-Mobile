import React from 'react';
import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
}
