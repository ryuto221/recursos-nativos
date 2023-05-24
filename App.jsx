import { StyleSheet, View } from 'react-native';
import { DefaultTheme, Provider as NativeProvider } from "react-native-paper";
import RootNavigation from './index.js';

export default function App() {
  return (
  <NativeProvider>
    <RootNavigation />
  </NativeProvider>);
}
