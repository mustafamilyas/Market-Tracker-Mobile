import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

export function BlinkColorText(props: any) {
  const blinkColorAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.sequence([
      Animated.timing(blinkColorAnim, {
        toValue: 1,
        duration: 0,
        useNativeDriver: false,
      }),
      Animated.timing(blinkColorAnim, {
        toValue: 0,
        duration: 950,
        useNativeDriver: false,
      }),
    ]).start();
  }, [blinkColorAnim]);

  return (
    <Animated.Text // Special animatable View
      style={{
        ...props.style,
        color: blinkColorAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ["#000", props.color],
        }),
      }}
    >
      {props.children}
    </Animated.Text>
  );
}
