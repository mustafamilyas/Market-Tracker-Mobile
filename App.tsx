import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={styles.safeArea}>
        <Navigation colorScheme={colorScheme} />
        <ExpoStatusBar />
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
