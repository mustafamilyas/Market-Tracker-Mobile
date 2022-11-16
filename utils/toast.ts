import Toast from 'react-native-toast-message';

export function showInfoToast(message: string) {
  Toast.show({
    type: 'info',
    text1: message,
  });
}

export function showFeatureInProgress() {
  showInfoToast('Feature unavailable yet, sorry!');
}
