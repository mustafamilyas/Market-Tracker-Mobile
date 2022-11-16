/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { AntDesign, Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabHomeScreen from '../screens/TabHomeScreen';
import TabDiscoverScreen from '../screens/TabDiscoverScreen';
import TabMarketScreen from '../screens/TabMarketScreen';
import TabWalletScreen from '../screens/TabWalletScreen';
import TabAccountScreen from '../screens/TabAccountScreen';
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Market"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabHomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => (
            <AntDesign
              name="home"
              style={{ marginBottom: -5 }}
              size={24}
              color={color}
            />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Discover"
        component={TabDiscoverScreen}
        options={{
          title: 'Discover',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="newspaper-outline"
              style={{ marginBottom: -5 }}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Market"
        component={TabMarketScreen}
        options={{
          headerShown: false,
          title: 'Market',
          tabBarIcon: ({ color }) => (
            <Entypo
              name="bar-graph"
              style={{ marginBottom: -5 }}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Wallet"
        component={TabWalletScreen}
        options={{
          title: 'Wallet',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="wallet-outline"
              style={{ marginBottom: -5 }}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={TabAccountScreen}
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => (
            <AntDesign
              name="user"
              style={{ marginBottom: -5 }}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
