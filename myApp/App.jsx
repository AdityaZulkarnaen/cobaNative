import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "./global.css"
import Home from './app/components/Home';

export default function App() {
  return (
    <View className='w-screen h-screen bg-white'>
      <StatusBar style="auto" />
      <Home/>

    </View>
  );
}